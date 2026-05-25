import { NextResponse } from "next/server";
import { aiQueue } from "@/lib/queue";

export async function GET() {
  await aiQueue.add("generate-rationale", {
    teamId: 1,
    message: "Test queue job",
  });

  return NextResponse.json({
    success: true,
    message: "Job added to queue",
  });
}