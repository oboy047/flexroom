"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnonseCard() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [image, setImage] = useState<File | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    // Example fake submit
    setTimeout(() => {
      setLoading(false);
      setMsg("✅ Annonse publisert!!");
      setTitle("");
      setDescription("");
      setPrice("");
      setImage(null);
      setStartDate("");
      setEndDate("");
    }, 1000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Navbar - med bedrift og bruker*/}
      <header className="w-full bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition">
            🏢 FlexRoom Admin
          </Link>
          <span className="font-medium text-gray-700">Bedrift / Bruker</span>
        </div>
      </header>

      {/* Form Lag annonse + tittle,  */}
      <form
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow-md grid gap-5"
      >
        <h2 className="text-2xl font-semibold">Lag ny annonse</h2>

        <label className="block">
          <span className="text-sm text-gray-600">Tittel / Navn på rom eller kontor</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="F.eks. Stort møterom ved sentrum"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-600">Beskrivelse</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Beskriv rommet, fasiliteter, størrelse osv."
            rows={4}
            required
          />
        </label>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-gray-600">Pris per time (kr)</span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              min={0}
              required
            />
          </label>

          {/* Trykk her funksjon */}
          <label className="block cursor-pointer">
            <span className="text-sm text-gray-600">Last opp bilde av rommet</span>
            <div className="mt-1 w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-indigo-500 hover:text-indigo-500 transition">
              {image ? image.name : "Klikk her for å legge til bilde"}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
        </div>

        {/* Dato */}
        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-gray-600">Startdato</span>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-600">Sluttdato</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full md:w-auto px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
        >
          {loading ? "⏳ Publiserer - vent..." : "✅ Publiser annonse"}
        </button>

        {msg && <p className="mt-3 text-gray-700 font-medium">{msg}</p>}
      </form>
    </div>
  );
}
