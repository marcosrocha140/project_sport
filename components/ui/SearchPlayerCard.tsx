import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export function SearchPlayerCard({image, FirstName, LastName, position, Gols, ass}) {
  return (
    <div>
      <div className="mb-3 hover:bg-[#0384c0af] flex items-center justify-between gap-1 bg-green-950 border border-[#ffffff94] rounded-bl-md rounded-tl-md">
        <div className="flex p-0.5 items-center gap-1">
          <img
            className="w-16 h-16 border border-[#fffffffb]"
            src={image}
            alt="image jogador"
          />
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1">
                <h2 className="font-bold text-blue-400 uppercase ">
                  {FirstName} {LastName}
                </h2>
                <FaCheckCircle className="text-blue-400 bg-white rounded-full text-[10px]" />
              </div>
              <hr className="text-[#ffffff54]"/>
              <p className="text-[10px] text-gray-300">
                <strong className="text-gray-400">Posição:</strong> {position}
              </p>
              <p className="text-[10px]"><strong className="text-gray-400">Cidade:</strong> Quixadá - CE</p>
              <p className="text-[10px]"><strong className="text-gray-400">Data de Nasc:</strong> 03/11/2003</p>
            </div>
            {/* <div className="flex items-center gap-2 text-gray-300 text-[11px]">
              <div className="flex gap-1 items-center">
                <FaStar className="text-yellow-500" />
                <p className="text-amber-50 font-semibold">5.5</p>
              </div>
              <p>Gols: {Gols}</p>
              <p>Ass: {ass}</p>
            </div> */}
          </div>
        </div>
        <img className="w-12" src="https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=x3d5biov&dl=1" alt="Logo do clube" />
      </div>
    </div>
  );
}
