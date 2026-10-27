"use client";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdMale } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function TimeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
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
    <div className="bg-gradient-to-b from-emerald-950/60 via-emerald-950/45 to-black/90">
      {/* HEADER */}
      <div className="w-full md:w-[90%] xl:w-[44%] mx-auto relative">
        <img
          src={clube?.banner}
          alt="Banner Clube"
          className="w-full h-40 object-cover"
        />

        <div className="flex items-center gap-1 p-1 border-y border-[#ffffff49] bg-[#00000085] w-full font-bold absolute bottom-0">
          <img
            className="w-10 h-10"
            src={clube?.logo || "https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=29damq0k&dl=1"}
            alt="Foto Time"
          />

          <div className="flex items-center w-full justify-between">
            <div>
              <h2 className="flex items-center gap-1 truncate sm:text-2xl md:text-3xl uppercase font-extrabold">
                {clube?.nome || "A.E Milan F.C"} <FaCheckCircle className="text-green-500 bg-white rounded-full text-[11px]" />
              </h2>

              <div className="flex items-center flex-wrap gap-2 font-medium text-[10px] sm:text-base">
                <div className="flex gap-1 items-center">
                  <FaMapMarkerAlt />
                  <p className="text-amber-100">{clube?.cidade || "Quixadá-CE"}</p>
                </div>

                <div className="flex gap-1 items-center">
                  <IoMdMale className="text-amber-500" />
                  <p className="text-amber-100">{clube?.categoria || "Futebol"}</p>
                </div>

                <div className="flex gap-1 items-center">
                  <FaTrophy className="text-yellow-400" />
                  <p className="text-amber-100">14</p>
                </div>
              </div>
            </div>

            <div className="text-[10px] flex items-center gap-1 border rounded-md p-1 font-medium hover:bg-blue-400 hover:cursor-pointer hover:text-black">
              <p>2.3 mil</p>
              <FaHeart className="text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* NAV INTERNA */}
      <div className="w-full bg-[#0c1613] md:w-[90%] xl:w-[44%] mx-auto flex justify-between text-sm sm:text-base overflow-x-auto whitespace-nowrap">
        <Link
          href="id/patrocinios"
          className={`p-1 ${
            pathname.includes("patrocinios") ? "bg-green-400 text-black" : ""
          }`}
        >
          Patrocínios
        </Link>

        <Link href="jogadores" className={`p-1 ${
            pathname.includes("jogadores") ? "bg-green-400 text-black" : ""
          }`}>
          Jogadores
        </Link>

        <Link
          href="id/ceo"
          className={`p-1 ${
            pathname.includes("ceo") ? "bg-green-400 text-black" : ""
          }`}
        >
          CEO
        </Link>

        <Link
          href="id/jogosrecentes"
          className={`p-1 ${
            pathname.includes("jogosrecentes") ? "bg-green-400 text-white border-gray-950" : ""
          }`}
        >
          Últimos Jogos
        </Link>
      </div>

      {/* CONTEÚDO DINÂMICO */}
      <div className="w-full md:w-[90%] xl:w-[44%] mx-auto p-2">{children as React.ReactNode}</div>
    </div>
  );
}
