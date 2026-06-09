import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export function SearchPlayerCard({image, FirstName, LastName, position, Gols, ass}) {
  return (
    <div>
      <div className="mb-3 hover:bg-[#0384c0af] flex items-center justify-between gap-1 bg-gradient-to-r from-blue-800 to-purple-60 border border-[#cacaca54] rounded-bl-md rounded-tl-md">
        <div className="flex items-center gap-1">
          <img
            className="w-16 border rounded-full"
            src={image}
            alt="image jogador"
          />
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1">
                <h2 className="font-bold [-webkit-text-stroke:0.6px_black]">
                  {FirstName} {LastName}
                </h2>
                <FaCheckCircle className="text-blue-400 bg-white rounded-full text-[10px]" />
              </div>
              <p className="text-[10px] text-gray-300">
                {position}
              </p>
              <p className="text-[10px] text-gray-300">Quixadá - CE</p>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <div className="flex gap-1 items-center">
                <FaStar className="text-yellow-500" />
                <p className="text-amber-50 font-semibold">5.5</p>
              </div>
              <p>Gols: {Gols}</p>
              <p>Ass: {ass}</p>
            </div>
          </div>
        </div>
        <img
          className="w-12 h-12 p-1"
          src="https://www.dropbox.com/scl/fi/0pch3ryiydd72m1ovukjb/guaruja0.png?rlkey=ngb9fe2pyjkxtq0019wp5lvqr&st=sif9rc8g&dl=1"
          alt="image time"
        />
      </div>
    </div>
  );
}
