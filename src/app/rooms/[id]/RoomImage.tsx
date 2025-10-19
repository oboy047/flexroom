"use client";

import Image from "next/image";
import { useState } from "react";

export default function RoomImage({
  city,
  title,
}: {
  city?: string | null;
  title: string;
}) {
  const [src, setSrc] = useState(
    `https://source.unsplash.com/1600x900/?office,meeting,${city || "workspace"}`
  );

  return (
    <div className="relative w-full h-96 overflow-hidden bg-gray-200 animate-pulse">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover brightness-90 transition-opacity duration-700"
        unoptimized
        onError={() => setSrc("/room-default.jpg")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <h1 className="absolute bottom-6 left-10 text-white text-4xl font-semibold drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
}
