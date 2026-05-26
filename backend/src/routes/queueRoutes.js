import express from "express";

import { teamQueue } from "../queues/teamQueue.js";

const router = express.Router();

router.get("/add-job", async (req, res) => {
  await teamQueue.add("team-job", {
    teamName: "Alpha Team",
    members: 3,
  });

  res.json({
    success: true,
    message: "Job Added To Queue",
  });
});

export default router;