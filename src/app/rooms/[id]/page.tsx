import { db } from "@/lib/db";
import { rooms } from "@/server/schema";
import { eq } from "drizzle-orm";
import BookingForm from "./BookingForm";
import RoomImage from "./RoomImage";

type Props = { params: { id: string } };
export const dynamic = "force-dynamic";

export default async function RoomDetail({ params }: Props) {
  const { id: idParam } = await params; // 👈 legg til await her
  const id = Number(idParam);
  const [r] = await db.select().from(rooms).where(eq(rooms.id, id));


  if (!r) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-700">
          <h1 className="text-2xl font-bold mb-2">Rom ikke funnet 😢</h1>
          <a href="/" className="text-indigo-600 hover:underline font-medium">
            Gå tilbake til oversikten
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-100 pb-16">
      {/* Hero Image */}
      <RoomImage city={r.city} title={r.title} />

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">{r.city}</h2>
            <p className="text-lg text-gray-600">
              💰{" "}
              <span className="font-semibold text-gray-800">
                {r.pricePerHour} kr/time
              </span>{" "}
              • 👥{" "}
              <span className="font-semibold text-gray-800">
                {r.capacity} personer
              </span>
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed text-[17px] mb-10">
            {r.description ||
              "Dette er et moderne og komfortabelt møterom med alle nødvendige fasiliteter."}
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 border-b border-gray-200 pb-2">
            📅 Book dette rommet
          </h3>
          <BookingForm roomId={r.id} />

          <div className="mt-10">
            <a
              href="/"
              className="inline-block px-5 py-2.5 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition"
            >
              ← Tilbake
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
