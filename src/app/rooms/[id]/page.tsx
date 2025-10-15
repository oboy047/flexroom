import { db } from "@/lib/db";
import { rooms } from "@/server/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

type Props = {
  params: { id: string };
};

export default async function RoomDetail({ params }: Props) {
  const id = Number(params.id);

  console.log("Fetching room with ID:", id);

  const result = await db.select().from(rooms).where(eq(rooms.id, id));
  console.log("Query result:", result);

  const room = result[0];
  if (!room) {
    return <main className="p-6">Rom ikke funnet.</main>;
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{room.title}</h1>
      <p className="opacity-80">
        {room.address} {room.city ? `• ${room.city}` : ""}
      </p>
      <p className="mt-2">{room.description}</p>
      <div className="mt-4">
        Pris: <b>{room.pricePerHour} kr/time</b> • Kapasitet: {room.capacity}
      </div>
      <a
        href="/"
        className="inline-block mt-6 px-4 py-2 rounded bg-black text-white"
      >
        Tilbake
      </a>
    </main>
  );
}
