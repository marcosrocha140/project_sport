export default function TimeHome() {
  return (
    <>
      <div className="text-amber-200 font-semibold text-xl my-1">
        Bem-vindo ao A.E Milan F.C❤️🤍
        <p className="text-sm">Aqui nos somos todos uma familia na vitoria ou derrota.</p>
      </div>
      
      <div>
        <div className="flex items-center justify-between">
          <p>Destaques</p>
          <p className="underline">Ver todos</p>
        </div>

        <div className="grid grid-cols-2 items-center justify-center gap-0.5">
          <img
            className="w-40"
            src="https://www.dropbox.com/scl/fi/gh9z0nk7ufyfb5k6vmirt/video.png?rlkey=8uqj3bsffo2ym0k707f4onf6o&st=57qoa940&dl=1"
            alt="video 1"
          />
          <img
            className="w-40"
            src="https://www.dropbox.com/scl/fi/p0hc8wdhklnumanti51wv/video4.png?rlkey=4xa46b2xewgby0fd0xrznw2pd&st=5vo33ypd&dl=1"
            alt="video 4"
          />
          <img
            className="w-40"
            src="https://www.dropbox.com/scl/fi/mjtk1vpk1qgnubcmdz110/video2.png?rlkey=2g5p3i3ru8rg5u6v4veucxx7i&st=csx8hh7n&dl=1"
            alt="video 2"
          />
          <img
            className="w-40"
            src="https://www.dropbox.com/scl/fi/8mm02f88tkzyim500uzka/video3.png?rlkey=nj6g2cad63yisvs4ngboz6tzb&st=n8t23yjs&dl=1"
            alt="video 3"
          />
        </div>
      </div>
    </>
  );
}
