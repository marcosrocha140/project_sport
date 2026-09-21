import { clubRepository } from "@/app/repositories/club.repository";
import { ImArrowUp } from "react-icons/im";

export default async function RankingTimes() {

  const clubes = await clubRepository.findAll();

  return (
    <div className="flex flex-col gap-2 p-2 mt-2 bg-center bg-[url('https://www.dropbox.com/scl/fi/v8ix80vbc2nzs1ryhe9jx/bg-ranking.png?rlkey=87zqpyn1g7bzvn3ip1ygupsjd&st=iw5ndgcw&dl=1')]">
      <div className="flex rounded-md justify-center items-center p-1.5 gap-2">
        <img
          className="w-12"
          src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1789921824/logoRanking_tpxyrj.png"
          alt="Imagem Ranking"
        />
        <h2 className="text-xl text-amber-300 font-bold">Ranking de Clube</h2>
        <select className="bg-[#073306] text-[17px] text-amber-300 rounded-md p-0.5 border border-amber-300">
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
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>PG</th>
          </tr>
        </thead>
        <tbody>
          {clubes.map((clube) => (
            <tr key={clube.id} className="border bg-[#0f610c6c]">
              <td className="border-r-1">{clube.id}</td>
              <td className="flex items-center gap-1 p-1">
                <ImArrowUp className="text-green-400" />
                <img className="w-7" src={clube.logo} alt={`Imagem do clube ${clube.nome}`} />
                <p>{clube.nome}</p>
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
