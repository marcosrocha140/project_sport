"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TimeHome() {
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
    <>
      <div className="bg-gradient-to-b from-emerald-950/60 via-emerald-950/45 to-black/90 border border-green-500 p-1 rounded-xl font-semibold text-xl my-1">
        Bem-vindo ao {clube?.nome || "[nome do clube]"}
        <p className="text-sm font-light">{clube?.slogan || "[slogan do clube]"}</p>
      </div>
      
      <div>
        <div className="flex items-center justify-between">
          <p>Destaques</p>
          <p className="underline">Ver todos</p>
        </div>

        <div className="grid grid-cols-2 items-center justify-center gap-0.5">
          <img
            className="w-40 rounded-md"
            src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793054405/registrosBanner_xxxkwt.png"
            alt="video 1"
          />
          <img
            className="w-40 rounded-md"
            src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793054405/registrosBanner_xxxkwt.png"
            alt="video 4"
          />
          <img
            className="w-40 rounded-md"
            src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793054405/registrosBanner_xxxkwt.png"
            alt="video 2"
          />
          <img
            className="w-40 rounded-md"
            src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1793054405/registrosBanner_xxxkwt.png"
            alt="video 3"
          />
        </div>
      </div>
    </>
  );
}
