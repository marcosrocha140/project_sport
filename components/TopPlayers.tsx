import { IoIosFootball } from "react-icons/io";
import { FaBasketball, FaVolleyball } from "react-icons/fa6";
import { PiRankingFill } from "react-icons/pi";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

export default function TopPlayers() {
  return (
    <div className="bg-white shadow p-3 rounded-sm">
      <div className="flex items-center">
        <PiRankingFill className="text-2xl" />
        <h2 className="font-bold text-2xl">Top Atletas</h2>
      </div>
      <hr className="text-[#b3afaf91]" />
      <ul className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-1">
          <div className="flex gap-1 items-center">
            <FaLongArrowAltUp className="text-green-500 text-xl" />
            <img
              className="w-9 rounded-full"
              src="https://www.dropbox.com/scl/fi/qxhw252kpfr6wfvp5p2ju/stephany.png?rlkey=ot42zmc2gdmvy4qizm4v9o26t&st=vdvptzxs&dl=1"
              alt=""
            />
            <div>
              <p className="font-bold">Stephany Curry</p>
              <p className="text-[10px] text-gray-400">The Turnbull ACs</p>
            </div>
          </div>
          <FaBasketball className="text-orange-600 bg-black rounded-full" />
        </div>
        <hr className="text-[#8f8e8e8f]" />

        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <FaLongArrowAltDown className="text-red-600 text-xl" />
            <img
              className="w-9 rounded-full"
              src="https://www.dropbox.com/scl/fi/40n5n0ado1ihw2ghaarsq/Luan.png?rlkey=97h02c79xpkqe0puy67s7ursf&st=34w59tel&dl=1"
              alt=""
            />
            <div>
              <p className="font-bold">Luan Candido</p>
              <p className="text-[10px] text-gray-400">Milan da várzea F.C</p>
            </div>
          </div>
          <IoIosFootball />
        </div>
        <hr className="text-[#8f8e8e8f]" />

        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <FaLongArrowAltUp className="text-green-500 text-xl" />
            <img
              className="w-9 rounded-full"
              src="https://www.dropbox.com/scl/fi/gqogaj58vfe01kq4lm2i2/marceloB.png?rlkey=tvhbx3ju2z7v0w0wl7a9nrb2g&st=w6m1izup&dl=1"
              alt=""
            />
            <div>
              <p className="font-bold">Marcelo Borges</p>
              <p className="text-[10px] text-gray-400">Milan varzea F.C</p>
            </div>
          </div>
          <IoIosFootball />
        </div>

        <hr className="text-[#8f8e8e8f]" />

        <button className="bg-blue-400 text-white p-2 rounded-md">
          Ver mais
        </button>
      </ul>
    </div>
  );
}
