"use client";
import { FaHandshake } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function Support() {
  const params = useParams();
  const [clube, setClube] = useState<any>(null);

  useEffect(() => {
    async function fetchClube() {
      try {
        const id = params?.id;
        if (!id) return;
        const res = await fetch(`/api/clubs/${id}`);
        if (res.ok) {
          const data = await res.json();
          setClube(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchClube();
  }, [params?.id]);
  return (
    <div className="p-2 mb-14 flex flex-col gap-1">
      <p className="text-sm">
        Ajude e veja quem apoia o <strong>{clube?.nome || "A.E Milan F.C"}</strong>
      </p>
      <section className="flex ring-2 ring-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-md p-1">
        <img
          className="w-20 h-20"
          src={clube?.logo}
          alt={`Logo ${clube?.nome || "Clube"}`}
        />
        <div>
          <h2 className="text-xl text-amber-200 font-semibold uppercase font-roboto">
            Apoie o {clube?.nome || "Clube"}
          </h2>
          <p className="text-[12px]">
            Seja um sócio-torcedor e mostre ainda mais apoio ao seu clube
            favorito e concorra a recompensas.
          </p>
          <button className="text-[#e3e3e4] text-[15px] border border-green-600 font-semibold bg-linear-to-r from-[#02530f] via-[#29d423] to-[#02530f] p-2 rounded-md flex items-center gap-1">
            <FaHandshake className="text-2xl" /> Ser Sócio torcedor
          </button>
        </div>
      </section>
      
      <p>Patrocinadores</p>

      <section className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-1 rounded-sm p-1 border border-[#05a347ce] bg-linear-to-r from-green-950 to-green-500 bg-clip-border">
          <div className="flex items-center gap-1">
            <Image className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793065210/patrocinioLogo_yhwogt.png" alt="Onza Foto" width={32} height={32} />
            <p className="shadow font-semibold">Seja um pratocinador +</p>
          </div>
          {/* <button className="bg-[#02530f] p-1 rounded-md text-amber-200 border flex items-center border-green-400">
          Conhecer
        </button> */}
          <Link href='/profile2'><MdDoubleArrow className="text-black" />{" "}</Link>
        </div>

        <div className="flex items-center justify-between gap-1 rounded-sm p-1 border border-[#05a347ce] bg-linear-to-r from-green-950 to-green-500 bg-clip-border">
          <div className="flex items-center gap-1">
            <Image className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793065210/patrocinioLogo_yhwogt.png" alt="Açaí com Chocolate" width={32} height={32} />
            <p className="shadow font-semibold">Seja um pratocinador +</p>
          </div>
          <MdDoubleArrow className="text-black" />{" "}
        </div>

        <div className="flex items-center justify-between gap-1 rounded-sm p-1 border border-[#05a347ce] bg-linear-to-r from-green-950 to-green-500 bg-clip-border">
          <div className="flex items-center gap-1">
            <Image className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793065210/patrocinioLogo_yhwogt.png" alt="Fabia Crochê" width={32} height={32} />
            <p className="shadow font-semibold">Seja um pratocinador +</p>
          </div>
          <MdDoubleArrow className="text-black" />{" "}
        </div>

        <div className="flex items-center justify-between gap-1 rounded-sm p-1 border border-[#05a347ce] bg-linear-to-r from-green-950 to-green-500 bg-clip-border">
          <div className="flex items-center gap-1">
            <Image className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793065210/patrocinioLogo_yhwogt.png" alt="SOS Tech" width={32} height={32} />
            <p className="shadow font-semibold">Seja um pratocinador +</p>
          </div>
          <MdDoubleArrow className="text-black" />{" "}
        </div>
      </section>
      <p className="text-gray-400 text-center">Planos sócio torcedor</p>
      <div className="flex flex-col items-center gap-1 justify-center">
        <div className="flex gap-1 items-center p-1 border rounded-md">
          <Image className="w-12 h-12" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793065210/patrocinioLogo_yhwogt.png" alt="Plano Pro" width={48} height={48} />
          <div>
            <p>Plano Pro</p>
            <p className="flex items-center gap-1 text-green-400 font-semibold">R$ 23,50 <span className="text-[10px] font-medium">/Mês</span></p>
          </div>
        </div>

        <div className="flex gap-1 items-center p-1 border rounded-md">
          <Image className="w-12 h-12 rounded-full" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793067635/stLogo_vbezpv.png" alt="Plano Fanático" width={48} height={48} />
          <div>
            <p>Plano Fanático</p>
            <p className="flex items-center gap-1 text-green-400 font-semibold">R$ 49,90 <span className="text-[10px] font-medium">/Mês</span></p>
          </div>
        </div>
        <p className="text-[9px]">Podendo Cancelar a qualquer momento</p>
      </div>
    </div>
  );
}
