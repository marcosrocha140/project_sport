"use client";
import Image from "next/image";
import { useState } from "react";
import { Reaction } from "./ui/Reaction";

export default function Card({imageUser, title, description} : {imageUser: string, title: string, description: string}) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="flex flex-col w-full lg:max-w-[50%] md:max-w-full bg-yellow-50 p-2 rounded-sm gap-1">
      <div className="relative">
        <img src={imageUser} alt="" />
      </div>

      <h2 className="text-xl">
        <strong>{title}</strong>
      </h2>
      <hr className="text-[#68686838]" />
      <div className="flex gap-1 items-center">
        <img
          className="w-4 rounded-full"
          src="https://www.dropbox.com/scl/fi/w45takjagvp62udsaor96/marcos.jpeg?rlkey=atmdvo03jek1ch09ag91fp7dc&st=xb9xvxkd&dl=1"
          alt="Foto"
        />
        <p className="font-semibold text-[#000000d2]">Marcos Rocha</p>
        <p className="text-gray-500">| 1 min</p>
      </div>
      <p
        className={`text-gray-700 text-sm leading-relaxed transition-all duration-500 ${
          expandido ? "max-h-[500px]" : "max-h-24 overflow-hidden"
        }`}
      >
        {description}
      </p>
      {/* Gradiente quando estiver fechado */}
      {!expandido && (
        <div className="absolute bottom-0 left-0 w-full h-12" />
      )}
      <button
        onClick={() => setExpandido(!expandido)}
        className="mt-3 w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold active:scale-95 transition-transform"
      >
        {expandido ? "Ver menos" : "Ver mais"}
      </button>
      <hr className="text-[#7c7b7b2f]" />
      <Reaction />
    </div>
  );
}
