import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { BsFillTrophyFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { AiFillTablet } from "react-icons/ai";

export function MatchesRecents() {
  return (
    <section className="px-1 py-3">
      <h2 className="text-xl md:text-4xl font-semibold">
        Últimos<span className="font-light text-green-600"> Jogos</span>
      </h2>
      <hr className="py-2 text-gray-500" />
      <div className="flex items-center text-sm gap-2">
        <p>
          <strong>Todos</strong>
        </p>
        <p>° Casa</p>
        <p>° Fora</p>
        <p>° Vitórias</p>
        <p>° Derrotas</p>
      </div>

      <div className="py-1 mb-2 rounded-md border text-center border-[#ffffff54] bg-emerald-900">
        <div className="flex text-[10px] items-center justify-between px-2">
          <p>Domingo 22 Fer</p>
          <p className="flex items-center text-red-500 font-semibold">
            <IoMdClose />
            Derrota
          </p>
        </div>
        <div className="flex my-1 py-1 items-center justify-center gap-2 border-y-1 border-[#ffffff5d] bg-[#000000d8]">
          <div className="flex items-center">
            <img
              className="w-10"
              src="https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=29damq0k&dl=1"
              alt="Foto do clube"
            />
            <div className="text-left">
              <h3 className="font-medium uppercase text-[10px]">
                A.E Milan F.C
              </h3>
              <p className="text-gray-400 text-[8px]">ﾠ</p>
              <p className="text-gray-400 text-[8px] flex items-center gap-1">
                <AiFillTablet className="text-red-600" />
                1
                <AiFillTablet className="text-yellow-300" />2
              </p>
            </div>
          </div>
          <h3>0</h3>
          <h2 className="text-2xl">VS</h2>
          <h3>1</h3>
          <div className="flex items-center">
            <div className="text-right">
              <h3 className="font-medium uppercase text-[10px]">
                Poço Verde F.C
              </h3>
              <p className="text-gray-200 text-[8px] flex items-center gap-1">
                João Vinicíus
                <IoIosFootball />
              </p>
              <p className="text-gray-400 text-[8px] flex items-center gap-1">
                <AiFillTablet className="text-red-600" />
                0
                <AiFillTablet className="text-yellow-300" />2
              </p>
            </div>
            <img
              className="w-10"
              src="https://www.dropbox.com/scl/fi/hmnr2zh0ker4l48utlkbg/Po-o.png?rlkey=5zsy39g3qs1hy6x51cv88p4qz&st=b6o4dc68&dl=1"
              alt="Foto do clube"
            />
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <p className="flex items-center text-xs gap-1 justify-center text-[8px]">
            <BsFillTrophyFill className="text-yellow-400" />
            Campeonato Distrital
          </p>
          <p className="flex items-center text-xs gap-1 justify-center text-[8px]">
            <GiPositionMarker className="text-gray-200" />
            Arena Milan
          </p>
        </div>
      </div>

      {/* Segundo Card de Jogo */}

      <div className="py-1 mb-2 rounded-md border text-center border-[#ffffff54] bg-emerald-900">
        <div className="flex text-[10px] items-center justify-between px-2">
          <p>Domingo 15 Fer</p>
          <p className="flex items-center text-red-600 font-semibold">
            <IoMdClose />
            Derrota
          </p>
        </div>
        <div className="flex my-1 py-1 items-center justify-center gap-2 border-y-1 border-[#ffffff5d] bg-[#000000d8]">
          <div className="flex items-center">
            <img
              className="w-10"
              src="https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=29damq0k&dl=1"
              alt="Foto do clube"
            />
            <div className="text-left">
              <h3 className="font-medium text-[10px] uppercase">
                A.E Milan F.C
              </h3>
              <p className="text-gray-400 text-[8px]">ﾠ</p>
              <p className="text-gray-400 text-[8px] flex items-center gap-1">
                <AiFillTablet className="text-red-600" />
                0
                <AiFillTablet className="text-yellow-300" />1
              </p>
            </div>
          </div>
          <h3>0</h3>
          <h2 className="text-2xl">VS</h2>
          <h3>1</h3>
          <div className="flex items-center">
            <div className="text-right">
              <h3 className="font-medium text-[10px] uppercase">
                D.P Quito F.C
              </h3>
              <p className="text-gray-400 text-[8px] flex items-center gap-1">
                Nome jogador
                <IoIosFootball />
              </p>
              <p className="text-gray-400 text-[8px] flex items-center gap-1">
                <AiFillTablet className="text-red-600" />
                0
                <AiFillTablet className="text-yellow-300" />0
              </p>
            </div>
            <img
              className="w-10"
              src="https://www.dropbox.com/scl/fi/kqqsy0hchwow5sfnltcde/quito.png?rlkey=wyk9xrz57snm4nq6kgc11so07&st=kgnjpojk&dl=1"
              alt="Foto do clube"
            />
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <p className="flex items-center text-xs gap-1 justify-center text-[8px]">
            <BsFillTrophyFill className="text-yellow-400" />
            Campeonato Distrital
          </p>
          <p className="flex items-center text-xs gap-1 justify-center text-[8px]">
            <GiPositionMarker className="text-gray-200" />
            Arena Milan
          </p>
        </div>
      </div>

      {/* Proximo Card de jogo */}

      <div className="py-1 rounded-md border text-center border-[#ffffff54] bg-emerald-900">
        <div className="flex text-[10px] items-center justify-between px-2">
          <p>Domingo 2 Mar</p>
          <p className="flex items-center gap-1 text-green-400 font-semibold">
            <FaCheck />
            Vitória
          </p>
        </div>
        <div className="flex my-1 py-1 items-center justify-center gap-2 border-y-1 border-[#ffffff5d] bg-[#000000d8]">
          <div className="flex items-center">
            <img
              className="w-10"
              src="https://www.dropbox.com/scl/fi/jwinbpf082eogvtian6tc/boavista.png?rlkey=w8bdo9x8gek3ouphu5hdesqru&st=87m69xih&dl=1"
              alt="Foto do clube"
            />
            <div className="text-left">
              <h3 className="font-medium text-[10px] uppercase">
                Boa Vista R.C
              </h3>
              <p className="text-gray-400 text-[8px]">ﾠ</p>
              <p className="text-gray-400 text-[8px] flex items-center gap-1">
                <AiFillTablet className="text-red-600" />
                0
                <AiFillTablet className="text-yellow-300" />0
              </p>
            </div>
          </div>
          <h3>0</h3>
          <h2 className="text-2xl">VS</h2>
          <h3>1</h3>
          <div className="flex items-center">
            <div className="text-right">
              <h3 className="font-medium text-[10px] uppercase">
                A.E Milan F.C
              </h3>
              <p className="text-gray-400 text-[8px] flex items-center gap-1">
                Weslen Monteiro
                <IoIosFootball />
              </p>
              <p className="text-gray-400 text-[8px] flex items-center gap-1">
                <AiFillTablet className="text-red-600" />
                0
                <AiFillTablet className="text-yellow-300" />0
              </p>
            </div>
            <img
              className="w-10"
              src="https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=29damq0k&dl=1"
              alt="Foto do clube"
            />
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <p className="flex items-center text-xs gap-1 justify-center text-[8px]">
            <BsFillTrophyFill className="text-yellow-400" />
            Campeonato Distrital
          </p>
          <p className="flex items-center text-xs gap-1 justify-center text-[8px]">
            <GiPositionMarker className="text-gray-200" />
            Arena BV
          </p>
        </div>
      </div>
      <h2 className="text-center underline">Ver todos os jogos</h2>
    </section>
  );
}
