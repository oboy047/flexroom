import { db } from "@/lib/db";
import { bookings } from "@/server/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { roomId, userId, startTime, endTime } = body;

    if (!roomId || !userId || !startTime || !endTime) {
      return NextResponse.json({ error: "Mangler felt" }, { status: 400 });
    }

    const result = await db.insert(bookings).values({
      roomId,
      userId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    });

    // ✅ Returner alltid JSON
    return NextResponse.json({
      success: true,
      bookingId: result[0]?.insertId || null,
    });
  } catch (err: any) {
    console.error("Booking error:", err);
    return NextResponse.json(
      { error: "Kunne ikke lagre booking", details: err.message },
      { status: 500 }
    );
  }
}
