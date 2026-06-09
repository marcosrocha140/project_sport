import { teams } from "@/app/data/teams";
import { ImArrowUp } from "react-icons/im";

export default function RankingTimes() {
  return (
    <div className="flex flex-col gap-2 p-2 mt-2 bg-center bg-[url('https://www.dropbox.com/scl/fi/v8ix80vbc2nzs1ryhe9jx/bg-ranking.png?rlkey=87zqpyn1g7bzvn3ip1ygupsjd&st=iw5ndgcw&dl=1')]">
      <div className="flex rounded-md justify-center items-center gap-2">
        <img
          className="w-12"
          src="https://www.dropbox.com/scl/fi/3ir0ryfildmjuwdz287rh/ranking.png?rlkey=sv62yw3jqykfk8nbpb8mx2odf&st=xkv0938m&dl=1"
          alt="Tarça Ranking"
        />
        <h2 className="text-2xl font-bold">Ranking de Clube</h2>
        <select className="bg-[#073306] rounded-md p-1 border border-green-400">
          {/* <option value="">Selecione o Ano</option> */}
          <option value="2026">2026</option>
          <option value="2025">2025</option>
        </select>
      </div>
    <hr />
      <p className="font-semibold">Ranking do Melhores Clubes da Temporada</p>
      <p className="text-sm">
        Confira o desempenho atual do melhores clube da região.
      </p>
      <p className="text-[10px]">Tabela atualizada todo domingo as 18:00 horas</p>
      <table className="w-full text-center">
        <thead>
          <tr className="text-left border rounded-md">
            <th>#</th>
            <th>Time</th>
            <th>PG</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id} className="border bg-[#0f610c6c]">
              <td className="border-r-1">{team.id}.</td>
              <td className="flex items-center p-1">
                <ImArrowUp className="text-green-400" />
                <img className="w-7" src={team.teamImg} alt="Foto do Clube" />
                <p>{team.teamName}</p>
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
