"use client";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { Reaction } from "./ui/Reaction";

export default function Card({
  imagem,
  titulo,
  conteudo,
  author,
  authorImage
}: {
  imagem: string;
  titulo: string;
  conteudo: string;
  author: string;
  authorImage: string
}) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="flex flex-col w-full lg:max-w-[50%] md:max-w-full bg-white p-2 rounded-sm gap-1">
      <div className="relative">
        <img src={imagem} alt="Imagem do post" />
      </div>

      <h2 className="text-xl">
        <strong>{titulo}</strong>
      </h2>
      <hr className="text-[#68686838]" />
      <div className="flex gap-1 items-center">
        <img
          className="w-4 rounded-full"
          src='https://res.cloudinary.com/dq0dfseeu/image/upload/v1786117781/mr_r5o0ia.png'
          alt="Foto"
        />
        <div className="flex gap-1 text-[12px]">
          <p className="flex gap-1 items-center font-semibold">Marcos Rocha <FaCheckCircle className="text-[10px] text-blue-500"/></p>
          |
          <p className="text-gray-500">1 min</p>
        </div>
      </div>
      <p
        className={`text-gray-700 text-sm leading-relaxed transition-all duration-500 ${
          expandido ? "max-h-[500px]" : "max-h-24 overflow-hidden"
        }`}
      >
        {conteudo}
      </p>
      {/* Gradiente quando estiver fechado */}
      {!expandido && <div className="absolute bottom-0 left-0 w-full h-12" />}
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
