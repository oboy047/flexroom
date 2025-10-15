import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { bookings } from "@/server/schema";
import { and, eq, or, gte, lte } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const { roomId, userId, startTime, endTime } = await req.json();

  if (!roomId || !userId || !startTime || !endTime) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const start = new Date(startTime);
  const end = new Date(endTime);
  if (!(start < end)) {
    return NextResponse.json({ error: "Invalid time range" }, { status: 400 });
  }

  // Overlapp: start inni, slutt inni, eller dekker hele intervallet
  const overlapping = await db
    .select()
    .from(bookings)
    .where(
      and(
        eq(bookings.roomId, Number(roomId)),
        or(
          and(gte(bookings.startTime, start), lte(bookings.startTime, end)),
          and(gte(bookings.endTime, start), lte(bookings.endTime, end)),
          and(lte(bookings.startTime, start), gte(bookings.endTime, end))
        )
      )
    );

  if (overlapping.length) {
    return NextResponse.json({ error: "Time slot taken" }, { status: 409 });
  }

  const inserted = await db.insert(bookings).values({
    roomId: Number(roomId),
    userId: Number(userId),
    startTime: start,
    endTime: end,
    status: "confirmed",
  }).$returningId();

  const id = Array.isArray(inserted) ? Number(inserted[0] as any) : Number(inserted as any);
  return NextResponse.json({ ok: true, bookingId: id }, { status: 201 });
}
