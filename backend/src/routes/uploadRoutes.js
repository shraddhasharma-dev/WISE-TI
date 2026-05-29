import express from "express";
import multer from "multer";
import fs from "fs";
import csv from "csv-parser";

import prisma from "../config/prisma.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/upload-roster",
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
      }

      const results = [];

      // Wrap the stream in a promise so errors can be safely caught by the try/catch block
      await new Promise((resolve, reject) => {
        fs.createReadStream(req.file.path)
          .pipe(csv())
          .on("data", (data) => results.push(data))
          .on("end", resolve)
          .on("error", reject);
      });

      // Process rows cleanly out of the stream callbacks
      for (const row of results) {
        // Skip empty rows or rows missing an email
        if (!row.email) continue; 

        // Use upsert to prevent unique constraint crashes
        await prisma.participant.upsert({
          where: { email: row.email.trim() },
          update: {
            name: row.name ? row.name.trim() : undefined,
            college: row.college ? row.college.trim() : undefined,
            skill: row.skill ? row.skill.trim() : undefined,
          },
          create: {
            name: row.name ? row.name.trim() : "",
            email: row.email.trim(),
            college: row.college ? row.college.trim() : "",
            skill: row.skill ? row.skill.trim() : "",
          },
        });
      }

      // Safely delete the temporary file after processing to save disk space
      try {
        fs.unlinkSync(req.file.path);
      } catch (unlinkError) {
        console.error("Failed to delete temp file:", unlinkError);
      }

      return res.json({
        success: true,
        message: "CSV Processed and Uploaded Successfully",
        count: results.length,
      });

    } catch (error) {
      console.error("Upload error caught:", error);

      // Clean up the uploaded file if a failure happened midway
      if (req.file && fs.existsSync(req.file.path)) {
        try { fs.unlinkSync(req.file.path); } catch {}
      }

      return res.status(500).json({
        success: false,
        message: "Upload Failed",
        error: error.message,
      });
    }
  }
);
// GET: Fetch all live database participants
router.get(
  "/participants",
  async (req, res) => {
    try {
      const participants = await prisma.participant.findMany({
        orderBy: {
          name: "asc", // Sorts alphabetically
        },
      });

      return res.json({
        success: true,
        data: participants,
      });
    } catch (error) {
      console.error("Database fetch error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve directory records",
        error: error.message,
      });
    }
  }
);
export default router;