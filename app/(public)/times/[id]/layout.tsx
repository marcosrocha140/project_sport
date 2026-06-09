"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdMale } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";

export default function TimeLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="bg-bottom bg-[url('https://www.dropbox.com/scl/fi/glo44z3phvrriyqfej569/teste10.png?rlkey=wr1e49zn3a50mkzgw42m2yo5s&st=so7cms3e&dl=1')]">
      {/* HEADER */}
      <div className="w-full md:w-[90%] xl:w-[44%] mx-auto relative">
        <img
          src="https://www.dropbox.com/scl/fi/gmd6hyqqtbj4q7vskyayh/milanBanner.png?rlkey=zflzpct9u0wu1covmsi9gvcr6&st=tikr13ea&dl=1"
          alt="Banner Clube"
        />

        <div className="flex items-center gap-1 p-1 border-y border-[#ffffff49] bg-[#00000085] w-full font-bold absolute bottom-0">
          <img
            className="w-10"
            src="https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=29damq0k&dl=1"
            alt="Foto Time"
          />

          <div className="flex items-center w-full justify-between">
            <div>
              <h2 className="flex items-center gap-1 text-xl sm:text-2xl md:text-3xl uppercase font-extrabold">
                A.E Milan F.C <FaCheckCircle className="text-green-500 bg-white rounded-full text-[13px]" />
              </h2>

              <div className="flex items-center flex-wrap gap-2 font-medium text-[10px] sm:text-base">
                <div className="flex gap-1 items-center">
                  <FaMapMarkerAlt />
                  <p className="text-amber-100">Quixadá-CE</p>
                </div>

                <div className="flex gap-1 items-center">
                  <IoMdMale className="text-amber-500" />
                  <p className="text-amber-100">Futebol</p>
                </div>

                <div className="flex gap-1 items-center">
                  <FaTrophy className="text-yellow-400" />
                  <p className="text-amber-100">14</p>
                </div>
              </div>
            </div>

            <div className="text-[10px] flex items-center gap-1 border rounded-md p-1 font-medium hover:bg-blue-400 hover:cursor-pointer hover:text-black">
              <FaHeartCircleCheck />
              <p>2.3 mil curtidas</p>
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
      <div className="w-full md:w-[90%] xl:w-[44%] mx-auto p-2">{children}</div>
    </div>
  );
}
