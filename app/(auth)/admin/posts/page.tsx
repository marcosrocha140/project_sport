'use client'
import { BackItem } from "@/components/ui/BackItem";
import { GoGear } from "react-icons/go";
import { FaSave } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { useState } from "react";

export default function PostCreatePage() {
  // const [preview, setPreview] = useState<string |null>(null);
  const [text, setText] = useState("");
  const quantity = 50;

  return (
    <main className="p-2">
      <BackItem title="Postagens" />
      <section
        className="flex flex-col gap-2
       bg-[#2e2e2ec4] rounded-sm p-2"
      >
        <h2 className="uppercase">Informações do post</h2>
        <div>
          <p className="text-gray-400 flex gap-1 ">
            Imagem da Capa<span className="text-red-500">*</span>
          </p>
          <input
            type="file"
            className="border w-40 border-gray-400 p-2 rounded-sm"
          />
        </div>

        <div>
          <p className="text-gray-400 flex gap-1 ">
            Titulo do post<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            placeholder="Titulo chamativo..."
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-500 w-full p-1.5 rounded-md"
          />
          <p className="text-gray-400 text-[11px] gap-1 text-right">{text.length}/{quantity}</p>
        </div>

        <div>
          <p className="text-gray-400 flex gap-1 ">
            Descrição<span className="text-red-500">*</span>
          </p>
          <textarea placeholder="Digite um texto..." rows={2} className="p-1 w-full rounded-sm border border-gray-500"></textarea>
          <p className="text-gray-400 text-[11px] gap-1 text-right">0/200</p>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-400 flex gap-1 ">
            Categoria<span className="text-red-500">*</span>
          </p>
          <select className="bg-[#81c11a] text-black p-0.5 rounded-sm">
            <option value="">Selecione</option>
            <option value="Futebol">Futebol</option>
            <option value="Futsal">Futsal</option>
            <option value="Basquete">Basquete</option>
          </select>
        </div>

        <div className="flex items-center justify-between mt-10">
          <button className="text-white font-roboto p-2 flex justify-center rounded-sm items-center gap-1 bg-[#3f3f3e86]">
            Salvar rascunho
            <FaSave />
          </button>
          <button className="text-black font-roboto p-2 flex w-28 justify-center rounded-sm items-center gap-1 bg-[#81c11a]">
            Publicar <LuSend />
          </button>
        </div>
      </section>
    </main>
  );
}
