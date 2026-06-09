
interface SearchMatchCardProps{
  nameClub1: String;
  imageClub1: String;
  GoalsClub1: number;
  nameClub2: String;
  imageClub2: String;
  GoalsClub2: number;
  dateMatch: String;
  statusMatch: String;
  categoryMatch: String

}

export function SearchMatchCard({nameClub1, imageClub1, GoalsClub1, nameClub2, imageClub2, GoalsClub2, dateMatch, statusMatch, categoryMatch}:SearchMatchCardProps) {
  return (
    <div>
      <div className="flex items-center justify-between p-0.5 gap-1 bg-gradient-to-r from-gray-800 to-purple-60 border border-[#cacaca54] rounded-bl-md rounded-tl-md">
        <div className="flex flex-col items-center">
          <img
            className="w-12 h-12 p-1"
            src={imageClub1}
            alt="image time"
          />
          <p className="text-[10px] text-gray-300">{nameClub1}</p>
        </div>

        <div className="flex flex-col items-center text-[12px] text-gray-400">
          <p>{categoryMatch}</p>
          <p>{dateMatch}</p>
          <div className="flex items-center text-white gap-2">
            <p className="text-xl">{GoalsClub1}</p>
            <p className="text-red-400 text-[11px] bg-[#ff000050] p-0.5 rounded-sm">
              {statusMatch}
            </p>
            <p className="text-xl">{GoalsClub2}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="w-12 h-12 p-1"
            src={imageClub2}
            alt="image time"
          />
          <p className="text-[10px] text-gray-300">{nameClub2}</p>
        </div>
      </div>
    </div>
  );
}
