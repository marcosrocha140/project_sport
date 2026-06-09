import { AiOutlineRise } from "react-icons/ai";
import { GiSoccerField } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

interface CardPlayerProps {
  position: string;
  image: string;
  FirstName: string;
  LastName: string;
  Gols: number;
  ass: number;
}

export function CardPlayer({
  position,
  image,
  FirstName,
  LastName,
  Gols,
  ass,
}: CardPlayerProps) {
  return (
    // Card do jogador do time

    <div className="relative snap-center shrink-0 w-36 h-48 border-3 rounded-sm my-2 hover:text-blue-400 cursor-pointer">
      <img
        className="absolute w-full h-full border-4 border-green-900"
        src={image}
        alt={`Foto Jogador ${FirstName}`}
      />

      <div className="text-sm absolute flex gap-0.5 items-center bg-green-900 p-0.5 rounded-br-md">
        <GiSoccerField className="text-white"/>
        <p className="text-[11px] text-white [-webkit-text-stroke:0.1px_white]">
          {position}
        </p>
      </div>

      <div className="text-sm absolute right-2 top-1 flex gap-0.5">
        <FaStar className="text-yellow-400"/>
        <p className="text-[12px] text-white font-bold">
          5.5
        </p>
      </div>

      <p
        className="text-sm absolute bottom-5 text-md drop-shadow-lg
    [text-shadow:2px_2px_6px_rgba(0,0,0,0.8)] text-[#ffffffe0] w-full border-y-2 uppercase font-semibold text-center bg-linear-to-r from-[#5a0707] via-[#ec0a0a] to-[#5a0707]"
      >
        {FirstName} <span className="text-orange-400">{LastName}</span>
      </p>
      <div className="absolute text-[12px] flex bottom-0 font-semibold w-full bg-gradient-to-r from-[#6d6d6d] via-[#fff] to-[#6d6d6d] text-gray-900 px-1 justify-between items-center">
        <AiOutlineRise className="text-green-500 rounded-sm text-xl bg-gray-900" />
        <p>Gols: {Gols}</p>
        <p>Ass: {ass}</p>
      </div>
    </div>
  );
}
