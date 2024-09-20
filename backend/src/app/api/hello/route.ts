import { NextResponse } from "next/server";
import pool from "@/app/database/db";

export async function GET() {
  try {
    // Query to get the first message from the 'messages' table
    const result = await pool.query('SELECT message FROM messages LIMIT 1');
    const message = result.rows[0]?.message || 'No message found';

    // Return the message as JSON
    return NextResponse.json({ message });
  } catch (error) {
    console.error('Error fetching message:', error);

    // Return an error response
    return NextResponse.json({ error: 'Failed to fetch message' }, { status: 500 });
  }
}