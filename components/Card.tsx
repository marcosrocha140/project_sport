"use client";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { Reaction } from "./ui/Reaction";
import { FaArrowUp } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";

export default function Card({
  imagem,
  titulo,
  conteudo,
  data_criacao,
  autor,
  autorImage,
  imagemUserComment
}: {
  imagem: string;
  titulo: string;
  conteudo: string;
  data_criacao: string;
  autor: string;
  autorImage: string;
  imagemUserComment: string;
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
          src={autorImage}
          alt="Foto autor publicação"
        />
        <div className="flex items-center gap-1 text-[12px]">
          <p className="flex gap-1 items-center font-semibold">{autor} <FaCheckCircle className="text-[8px] text-blue-500"/></p>
          |
          <p className="text-gray-500 text-[9px]">{data_criacao}</p>
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
      <section className="flex items-center justify-between gap-1 p-1 bg-[#ebe6e6] rounded-md">
        <img className="w-10 h-10 rounded-full border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790954012/wedson_ouklu4.png" alt="foto do usuario" />
        <div>
          <p className="text-xs font-semibold">Wedson Ferreira <span className="text-[9px] font-medium text-gray-600">24 min</span></p>
          <p className="text-xs">App muito bom esse marcos é fera no que faz sou fan demais dele</p>
        </div>
        <IoMdMore className="text-xl"/>
      </section>

      <section className="flex items-center justify-between gap-1 p-1 bg-[#ebe6e6] rounded-md">
        <img className="w-10 h-10 rounded-full border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790954438/hitimmm_wgmoni.png" alt="foto do usuario" />
        <div>
          <p className="text-xs font-semibold">Hitalo Sousa <span className="text-[9px] font-medium text-gray-600">1 h</span></p>
          <p className="text-xs">Esse cara é muito bom viu, melhor programador que já vi</p>
        </div>
        <IoMdMore className="text-xl"/>
      </section>
      <div className="flex gap-1">
        <img className="w-9 h-9 rounded-full" src={imagemUserComment} alt="Foto do usuario" />
        <div className="flex items-center relative w-full">
          <input className="bg-[#0c0c0c2c] w-full h-9 rounded-4xl p-1 pl-3 text-[15px]" type="text" placeholder="Deixe um comentário..." />
          <FaArrowUp className="absolute right-1 top-1 p-0.5 w-12 rounded-2xl bg-blue-600 text-white text-3xl"/>
        </div>
      </div>
    </div>
  );
}
