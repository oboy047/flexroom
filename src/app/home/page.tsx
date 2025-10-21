import React from "react";



// Hovedside inspirert av farger/kortlayouten dere viste.
// Ren React + Tailwind. Ingen tredjepartsbibliotek. Kan limes rett inn i Next.js som en side/komponent.

// Lillafarge/aksent – juster disse hvis dere vil treffe designguiden bedre
const ACCENT = {
  from: "from-[#6F4CF6]", // dyp lilla
  via: "via-[#8D6BFA]",
  to: "to-[#B39CFF]",
  solid: "#7C66F5",
};

const cities = [
  {
    name: "Oslo",
    description: "Fleksible møterom i hele byen.",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Bergen",
    description: "Moderne rom nær sentrum og Bryggen.",
    image:
      "https://images.unsplash.com/photo-1581527025148-cf1ee51d5a8b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Trondheim",
    description: "Lyst og luftig – klare til workshop.",
    image:
      "https://images.unsplash.com/photo-1564673563303-d6cbd7a40c8b?q=80&w=1400&auto=format&fit=crop",
  },
];

const features = [
  {
    title: "Enkel booking",
    text: "Finn rom og reserver på få sekunder – helt uten e‑post frem og tilbake.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M8 7V3M16 7V3M4 11h16M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Rett pris",
    text: "Transparente priser per time eller dag – ingen overraskelser.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 8c-2.21 0-4 .895-4 2s1.79 2 4 2 4 .895 4 2-1.79 2-4 2m0-10v10m0 4v-2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Skalerbart",
    text: "Små møter eller store arrangement – vi har plass til begge.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section
        className={`relative overflow-hidden bg-gradient-to-r ${ACCENT.from} ${ACCENT.via} ${ACCENT.to}`}
      >
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/40 to-transparent" />
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 py-20 md:flex-row md:py-28">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl">
              Finn ditt perfekte møterom
            </h1>
            <p className="mt-4 max-w-xl text-white/90">
              Rask og enkel booking for bedrifter og privatpersoner. Søk,
              filtrer og reserver – alt på ett sted.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#map"
                className="rounded-2xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-sm transition hover:shadow"
              >
                Se nærmeste rom
              </a>
              <a
                href="#cities"
                className="rounded-2xl bg-black/20 px-5 py-3 font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-black/25"
              >
                Utforsk byer
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-white/10 p-[2px] shadow-xl ring-1 ring-white/30">
              <div className="h-full w-full rounded-[calc(theme(borderRadius.3xl)-2px)] bg-white/10 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
                  alt="Møterom"
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-gray-200">
                  <span
                    className="text-[color:var(--accent,${ACCENT.solid})]"
                    style={{ color: ACCENT.solid }}
                  >
                    {f.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BY-KORT (inspirert av cards med tekst i bunn) */}
      <section id="cities" className="mx-auto max-w-7xl px-4 pb-4 pt-2">
        <h2 className="mb-6 text-2xl font-semibold">Populære områder</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cities.map((c) => (
            <a
              key={c.name}
              href={`#/search?city=${encodeURIComponent(c.name)}`}
              className="group rounded-[28px] shadow-xl ring-1 ring-gray-100"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[28px]">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-4xl font-extrabold tracking-tight text-[#FFF9E6] drop-shadow-md">
                    {c.name}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-white/85">
                    {c.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* KARTSEKSJON – lettvekts mock som matcher fargene */}
      <section id="map" className="mt-16 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Finn rom i nærheten</h2>
            <a
              href="#/search"
              className="text-sm font-semibold text-[color:${ACCENT.solid}]"
              style={{ color: ACCENT.solid }}
            >
              Åpne avansert søk →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            {/* "Kart" */}
            <div className="relative h-[420px] overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200">
              {/* Placeholder map illustration */}
              <svg viewBox="0 0 800 480" className="h-full w-full">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f4f1ff" />
                    <stop offset="100%" stopColor="#efe9ff" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="800" height="480" fill="url(#g1)" />
                {/* pseudo roads */}
                <path
                  d="M30 420 C 200 380, 300 300, 500 330 S 760 350, 780 280"
                  fill="none"
                  stroke="#d8d2ff"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                <path
                  d="M40 120 C 250 100, 280 200, 470 190 S 690 150, 760 90"
                  fill="none"
                  stroke="#e5e0ff"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                {/* markers */}
                {[
                  { x: 190, y: 160, label: "Oslo" },
                  { x: 420, y: 210, label: "Bergen" },
                  { x: 610, y: 300, label: "Trondheim" },
                ].map((m) => (
                  <g key={m.label}>
                    <circle cx={m.x} cy={m.y} r="9" fill={ACCENT.solid} />
                    <circle
                      cx={m.x}
                      cy={m.y}
                      r="18"
                      fill={ACCENT.solid}
                      opacity="0.15"
                    />
                    <text
                      x={m.x + 12}
                      y={m.y + 4}
                      fontSize="14"
                      fill="#111827"
                      fontWeight={600}
                    >
                      {m.label}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            </div>

            {/* Nearby list */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="h-20 w-28 overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop"
                      alt="room"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Møterom {i}</p>
                    <p className="text-sm text-gray-600">
                      Oslo • fra 350 kr/time • 8 pers
                    </p>
                  </div>
                  <button
                    className="rounded-xl bg-[color:var(--btn,${ACCENT.solid})] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                    style={{ backgroundColor: ACCENT.solid }}
                  >
                    Se mer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Leverer rom når du trenger det
          </h2>
          <p className="mt-4 text-gray-700">
            Vi gjør det enkelt å booke riktig rom – enten det er et kort
            statusmøte, en workshop eller en stor presentasjon. Med smart
            filtrering og tydelige priser får du full kontroll.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#/search"
              className="rounded-xl bg-gray-900 px-5 py-3 text-white shadow-sm hover:opacity-95"
            >
              Start søk
            </a>
            <a
              href="#/about"
              className="rounded-xl px-5 py-3 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
            >
              Om oss
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-2 shadow-xl ring-1 ring-gray-200">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
              alt="workspace"
              className="h-full w-full rounded-[calc(theme(borderRadius.3xl)-0.5rem)] object-cover"
            />
            <div
              className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr ${ACCENT.from} ${ACCENT.to} opacity-10`}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 border-t border-gray-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} FlexRoom
          </p>
          <nav className="flex gap-5 text-sm text-gray-700">
            <a href="#/privacy" className="hover:underline">
              Personvern
            </a>
            <a href="#/terms" className="hover:underline">
              Vilkår
            </a>
            <a href="#/contact" className="hover:underline">
              Kontakt
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
