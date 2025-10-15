"use client";
import { useState } from "react";

export default function BookingForm({ roomId }: { roomId: number }) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const form = e.currentTarget as any;
    const start = form.start.value;
    const end = form.end.value;
    const userId = 1;

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ roomId, userId, startTime: start, endTime: end }),
    });
    const data = await res.json();

    setLoading(false);
    setMsg(res.ok ? `Booking OK (#${data.bookingId})` : `Feil: ${data.error || "ukjent"}`);
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-3 border rounded-xl p-4">
      <div className="font-semibold">Book tid</div>
      <input name="start" type="datetime-local" className="border rounded p-2 w-full" required />
      <input name="end" type="datetime-local" className="border rounded p-2 w-full" required />
      <button disabled={loading} className="px-4 py-2 rounded bg-black text-white">
        {loading ? "Bestiller..." : "Bekreft booking"}
      </button>
      {msg && <div className="text-sm opacity-80">{msg}</div>}
    </form>
  );
}
