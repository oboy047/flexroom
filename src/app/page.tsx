import { db } from "@/lib/db";
import { rooms } from "@/server/schema";
import Link from "next/link";
import Login from "./login/page";

export function Page() {
  return <Login />;
}

export default async function Home() {
  const data = await db.select().from(rooms);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">🏢 FlexRoom</h1>
          <nav className="flex space-x-4 text-gray-700 font-medium">
            <Link href="/">Hjem</Link>
            <Link href="/about">Om oss</Link>
            <Link href="/contact">Kontakt</Link>
            <Link href="/login" className="text-indigo-600 hover:text-indigo-800 font-semibold">Logg inn</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <h2 className="text-3xl font-bold mb-2">Finn ditt perfekte møterom</h2>
        <p className="opacity-90">Rask og enkel booking for bedrifter og privatpersoner</p>
      </section>

      {/* Room list */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Tilgjengelige rom</h2>

        {data.length === 0 ? (
          <p className="text-gray-500">Ingen rom registrert enda.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((room) => (
              <Link
                href={`/rooms/${room.id}`}
                key={room.id}
                className="bg-white shadow hover:shadow-lg transition rounded-2xl overflow-hidden border border-gray-100"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{room.title}</h3>
                  <p className="text-gray-600 mb-2">{room.city}</p>
                  <p className="text-sm text-gray-500">
                    {room.pricePerHour} kr/time • 👥 {room.capacity} pers

                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} FlexRoom – Alle rettigheter forbeholdt
        </div>
      </footer>
    </main>
  );
}
