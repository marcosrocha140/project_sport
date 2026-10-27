
import Image from "next/image";

export interface MatchCardProps {
  competition: string;
  season?: string;
  homeTeam: string;
  homeLogo: string;
  homeWins: number;
  awayTeam: string;
  awayLogo: string;
  awayWins: number;
  homeScore?: number;
  awayScore?: number;
}

export default function MatchCard({
  competition,
  season = "2026",
  homeTeam,
  homeLogo,
  homeWins,
  awayTeam,
  awayLogo,
  awayWins,
  homeScore = 0,
  awayScore = 0,
}: MatchCardProps) {
  return (
    <article className="relative isolate w-full overflow-hidden rounded-2xl border border-emerald-500/60 bg-[#03291d] text-white shadow-lg">
      {/* Background do estádio */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/stadium.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover object-center opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-emerald-950/45 to-black/90" />
      </div>

      {/* Cabeçalho da competição */}
      <header className="flex items-center gap-3 border-b border-emerald-400/20 bg-black/20 px-4 py-3">
        <span className="text-xl text-emerald-300" aria-hidden="true">
          🏆
        </span>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold sm:text-base">
            {competition}
          </h3>
          <p className="text-xs text-emerald-100/70">
            Temporada {season}
          </p>
        </div>
      </header>

      {/* Times e placar */}
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-3 py-6 sm:gap-4 sm:px-5 sm:py-8">
        {/* Time da casa */}
        <div className="flex min-w-0 flex-col items-center gap-2 text-center">
          <div className="relative h-14 w-14 sm:h-[76px] sm:w-[76px]">
            <Image
              src={homeLogo}
              alt={`Escudo do ${homeTeam}`}
              fill
              sizes="76px"
              className="object-contain drop-shadow-lg"
            />
          </div>

          <h4 className="line-clamp-2 min-h-10 break-words text-xs font-bold sm:text-sm">
            {homeTeam}
          </h4>

          <p className="flex items-center gap-1 text-[11px] text-emerald-100/90 sm:text-xs">
            <span aria-hidden="true">🏆</span>
            Vitórias: {homeWins}
          </p>
        </div>

        {/* Placar central */}
        <div className="flex min-w-[112px] items-center justify-center gap-2 rounded-2xl border border-emerald-400/50 bg-black/50 px-3 py-4 shadow-inner sm:min-w-[160px] sm:gap-3 sm:px-5">
          <span className="text-2xl font-black tabular-nums sm:text-4xl">
            {homeScore}
          </span>

          <span className="text-xs font-bold text-emerald-300 sm:text-base">
            VS
          </span>

          <span className="text-2xl font-black tabular-nums sm:text-4xl">
            {awayScore}
          </span>
        </div>

        {/* Time visitante */}
        <div className="flex min-w-0 flex-col items-center gap-2 text-center">
          <div className="relative h-14 w-14 sm:h-[76px] sm:w-[76px]">
            <Image
              src={awayLogo}
              alt={`Escudo do ${awayTeam}`}
              fill
              sizes="76px"
              className="object-contain drop-shadow-lg"
            />
          </div>

          <h4 className="line-clamp-2 min-h-10 break-words text-xs font-bold sm:text-sm">
            {awayTeam}
          </h4>

          <p className="flex items-center gap-1 text-[11px] text-emerald-100/90 sm:text-xs">
            <span aria-hidden="true">🏆</span>
            Vitórias: {awayWins}
          </p>
        </div>
      </div>

      {/* Rodapé da competição */}
      <footer className="flex items-center justify-center gap-2 border-t border-emerald-400/30 bg-black/30 px-3 py-3 text-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5 shrink-0 text-emerald-300"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M8 5v14M16 5v14M3 12h18" />
          <circle cx="12" cy="12" r="2" />
        </svg>

        <span className="truncate text-xs font-semibold text-emerald-300 sm:text-sm">
          {competition}
        </span>
      </footer>
    </article>
  );
}
