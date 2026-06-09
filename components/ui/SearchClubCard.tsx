import { GiPositionMarker } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdMale } from "react-icons/io";

interface clubCardProps {
  clubName: string,
  clubImage: string,
  clubCity: string,
  clubCategory: string
}

export function SearchCardClub({clubImage, clubName, clubCity, clubCategory}:clubCardProps) {

  return (
    <div>
      <div className="flex items-center justify-between p-1 gap-1 bg-gradient-to-r from-green-800 to-purple-60 border border-[#cacaca54] rounded-bl-md rounded-tl-md">
        <div className="flex items-center gap-0.5">
          <img
            className="w-12 h-12 rounded-bl-md rounded-tl-md"
            src={clubImage}
            alt="image clube"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h2 className="font-bold [-webkit-text-stroke:0.6px_black]">
                {clubName}
              </h2>
              <FaCheckCircle className="text-green-500 bg-white rounded-full text-[10px]" />
            </div>

            <p className="text-[11px] flex items-center gap-0.2 text-gray-300">
              <GiPositionMarker /> {clubCity}
            </p>
            <div className="flex gap-1">
              <p className="flex items-center gap-0.5 text-[10px] text-gray-300">
              <GiSoccerBall className="bg-black rounded-full" /> {clubCategory}
            </p>

            <p className="flex items-center gap-0.5 text-[10px] text-gray-300">
              <IoMdMale className="text-blue-500" /> Masculino
            </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r text-[9px] p-1 flex items-center gap-1 from-[#6d6d6d] via-[#ebeaea] to-[#6d6d6d] border border-[#e4e5e6c2] rounded-sm font-semibold uppercase text-blue-950">
        <p className="text-[11px]">Perfil</p>
        <IoIosArrowForward />
      </div>
      </div>
    </div>

  );
}
