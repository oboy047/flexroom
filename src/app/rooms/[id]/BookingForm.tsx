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
    setMsg(res.ok ? `✅ Booking registrert (#${data.bookingId})` : `❌ Feil: ${data.error || "ukjent feil"}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-4 grid gap-5 bg-gray-50 border border-gray-200 rounded-xl p-6"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm text-gray-600">Starttid</span>
          <input
            name="start"
            type="datetime-local"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm text-gray-600">Sluttid</span>
          <input
            name="end"
            type="datetime-local"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
        </label>
      </div>

      <button
        disabled={loading}
        className="mt-4 w-full md:w-auto px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
      >
        {loading ? "⏳ Bestiller..." : "✅ Bekreft booking"}
      </button>

      {msg && <p className="mt-3 text-gray-700 font-medium">{msg}</p>}
    </form>
  );
}
