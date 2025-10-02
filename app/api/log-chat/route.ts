import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "app/components/chatbot_conversations.json");

export async function POST(req: NextRequest) {
  try {
    const { user, bot } = await req.json();
    let data = [];
    try {
      const file = await fs.readFile(filePath, "utf-8");
      data = JSON.parse(file);
    } catch (e) {
      // file does not exist or is empty
      data = [];
    }
    data.push({ user, bot });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
