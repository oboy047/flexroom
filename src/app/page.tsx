import { db } from "@/lib/db";
import { rooms } from "@/server/schema";

export const dynamic = "force-dynamic"; // avoid prerender caching in dev

export default async function Home() {
  const data = await db.select().from(rooms);

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Finn rom</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {data.map((r: any) => (
          <a key={r.id} href={`/rooms/${r.id}`} className="border rounded-xl p-4 hover:shadow">
            <div className="text-lg font-semibold">{r.title}</div>
            <div className="opacity-70">{r.city}</div>
            <div className="mt-2">{r.pricePerHour} kr/time • {r.capacity} pers</div>
          </a>
        ))}
        {data.length === 0 && (
          <div className="opacity-70">Ingen rom enda — legg til via /admin eller seed i DB.</div>
        )}
      </div>
    </main>
  );
}
