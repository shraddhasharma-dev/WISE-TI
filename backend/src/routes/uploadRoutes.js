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
      const results = [];

      fs.createReadStream(req.file.path)
        .pipe(csv())
        .on("data", (data) => {
          results.push(data);
        })
        .on("end", async () => {
          for (const row of results) {
            await prisma.participant.create({
              data: {
                name: row.name,
                email: row.email,
                college: row.college,
                skill: row.skill,
              },
            });
          }

          res.json({
            success: true,
            message: "CSV Uploaded Successfully",
            count: results.length,
          });
        });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: "Upload Failed",
      });
    }
  }
);

export default router;