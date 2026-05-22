"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileImage({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  const [error, setError] = useState(false);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-36 h-36 rounded-full overflow-hidden bg-slate-100 ring-4 ring-slate-100 flex items-center justify-center">
      {!error ? (
        <Image
          src={src}
          alt={name}
          width={144}
          height={144}
          className="object-cover w-full h-full"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-3xl font-semibold text-slate-400">{initials}</span>
      )}
    </div>
  );
}
