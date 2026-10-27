"use client";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { Reaction } from "./ui/Reaction";
import { FaArrowUp } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import type { CardProps } from "@/types";

export default function Card({
  imagem,
  titulo,
  conteudo,
  data_criacao,
  autor,
  autorImage,
  imagemUserComment,
}: CardProps) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="flex flex-col w-full lg:max-w-[50%] md:max-w-full bg-white p-2 rounded-sm gap-1 relative">
      {imagem && (
        <div className="relative w-full h-64">
          <Image src={imagem} alt={`Imagem da publicação: ${titulo}`} fill className="object-cover" />
        </div>
      )}

      <h2 className="text-xl">
        <strong>{titulo}</strong>
      </h2>
      <hr className="text-[#68686838]" />
      <div className="flex gap-1 items-center">
        {autorImage && (
          <Image
            className="w-4 h-4 rounded-full"
            src={autorImage}
            alt={`Foto de ${autor}`}
            width={16}
            height={16}
          />
        )}
        <div className="flex items-center gap-1 text-[12px]">
          <p className="flex text-black gap-1 items-center font-bold">{autor} <FaCheckCircle className="text-[8px] text-blue-500"/></p>
          {data_criacao && (
            <>
              |
              <p className="text-gray-500 text-[9px]">{data_criacao}</p>
            </>
          )}
        </div>
      </div>
      <p
        className={`text-gray-700 text-sm leading-relaxed transition-all duration-500 ${
          expandido ? "max-h-125" : "max-h-24 overflow-hidden"
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
      {/* Sessão de comentarios */}
      {/* Comentários - em desenvolvimento */}
      <section className="flex items-center justify-between gap-1 p-1 bg-[#ebe6e6] rounded-md">
        <Image className="w-10 h-10 rounded-full border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790954012/wedson_ouklu4.png" alt="Foto de Wedson Ferreira" width={40} height={40} />
        <div className="flex-1">
          <p className="text-xs font-semibold">Wedson Ferreira <span className="text-[9px] font-medium text-gray-600">24 min</span></p>
          <p className="text-xs">App muito bom esse marcos é fera no que faz sou fan demais dele</p>
        </div>
        <IoMdMore className="text-xl cursor-pointer" />
      </section>

      <section className="flex items-center justify-between gap-1 p-1 bg-[#ebe6e6] rounded-md">
        <Image className="w-10 h-10 rounded-full border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790954438/hitimmm_wgmoni.png" alt="Foto de Hitalo Sousa" width={40} height={40} />
        <div className="flex-1">
          <p className="text-xs font-semibold">Hitalo Sousa <span className="text-[9px] font-medium text-gray-600">1 h</span></p>
          <p className="text-xs">Esse cara é muito bom viu, melhor programador que já vi</p>
        </div>
        <IoMdMore className="text-xl cursor-pointer" />
      </section>
      <div className="flex gap-1">
        {imagemUserComment && (
          <Image className="w-9 h-9 rounded-full" src={imagemUserComment} alt="Sua foto" width={36} height={36} />
        )}
        <div className="flex items-center relative w-full">
          <input className="bg-[#0c0c0c2c] w-full h-9 rounded-4xl p-1 pl-3 text-[15px]" type="text" placeholder="Deixe um comentário..." />
          <FaArrowUp className="absolute right-1 top-1 p-0.5 w-12 rounded-2xl bg-blue-600 text-white text-3xl cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}
