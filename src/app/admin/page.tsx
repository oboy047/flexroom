"use client";

import Link from "next/link";
import Image from "next/image";

export default function AdminPage() {
  const sections = [
    {
      title1: "Lag annonse",
      descriptionFlex: "Opprett en ny annonse for dine produkter eller tjenester.",
      href: "/create-ad",
    },
    {
      title1: "Mine annonser",
      descriptionFlex: "Administrer, rediger og slett dine eksisterende annonser.",
      href: "/my-ads",
    },
    {
      title1: "Data",
      descriptionFlex: "Få innsikt i visninger, klikk og kundedata.",
      href: "/data",
    },
    {
      title1: "Chat-rom",
      descriptionFlex: "Kommuniser direkte med kunder og samarbeidspartnere.",
      href: "/chat",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-900">
      {/*Nav - med bedrift /Bruker lagt til*/}
      <header className="w-full bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition">
            🏢 FlexRoom Admin
          </Link>
          <span className="font-medium">Bedrift / Bruker</span>
        </div>
      </header>

      {/* Profil - mulighet for å legge til bilde*/}
      <section className="max-w-6xl mx-auto w-full bg-white shadow-md rounded-2xl mt-6 p-6 flex items-center gap-4">
        <Image
          src="/profile-placeholder.png"
          alt= "...EMPTY"
          width={70}
          height={70}
          className="rounded-full border-4 border-gray-200"
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Admin Name</span>
          <span className="text-gray-600 text-sm">admin@example.com</span>
        </div>
      </section>

      {/* Main - med tittel og forklaring */}
      <main className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-6">
        {sections.map((e, indexF) => (
          <Link
            key={indexF}
            href={e.href}
            className="block cursor-pointer bg-white shadow-md rounded-2xl p-6 border border-gray-200 transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{e.title1}</h3>
            <p className="text-gray-600 text-sm">{e.descriptionFlex}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}
