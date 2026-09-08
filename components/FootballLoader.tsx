"use client";

export function FootballLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#0b5d32]">
      {/* Efeito de iluminação do campo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]" />

      {/* Linhas do campo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />
      </div>

      {/* Loader */}
      <div className="relative h-52 w-52">
        {/* Bola */}
        <div className="football-ball absolute left-1/2 top-1/2">
          <img
            src="https://www.pngarts.com/files/2/Soccer-Ball-PNG-Photo.png"
            alt="Bola de futebol"
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* Sombra */}
        <div className="football-shadow absolute bottom-8 left-1/2 h-4 w-24 -translate-x-1/2 rounded-full bg-black/30 blur-md" />
      </div>

      {/* Texto */}
      <div className="relative -mt-4 text-center">
        <h1 className="text-xl uppercase font-bold tracking-[0.25em] text-white">
          Esporte Interior
        </h1>

        <div className="mt-3 flex items-center justify-center gap-1">
          <span className="text-sm text-white/70">Carregando</span>

          <span className="loading-dot animation-delay-0">.</span>
          <span className="loading-dot animation-delay-150">.</span>
          <span className="loading-dot animation-delay-300">.</span>
        </div>
      </div>
    </div>
  );
}
