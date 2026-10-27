
import Image from "next/image";
import Link from "next/link";

export interface CardTeamProps {
  id: string;
  name: string;
  city: string;
  sport: string;
  logo: string;
  profileHref?: string;
}

export default function CardTeam({
  id,
  name,
  city,
  sport,
  logo,
  profileHref,
}: CardTeamProps) {
  return (
    <article className="group relative flex min-h-[88px] w-full items-center gap-2.5 overflow-hidden rounded-xl border border-slate-500 bg-gradient-to-r from-green-700 via-green-900 to-green-950 p-1.5 shadow-md transition-all duration-200 hover:border-cyan-300 hover:brightness-110 sm:gap-3 sm:p-2.5">
      {/* Brilho sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"
      />

      {/* Escudo */}
      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-slate-900/30 sm:h-12 sm:w-12">
        <Image
          src={logo}
          alt={`Escudo do ${name}`}
          fill
          sizes="48px"
          className="object-contain p-0.5"
        />
      </div>

      {/* Informações do time */}
      <div className="relative z-10 min-w-0 flex-1">
        <h2 className="truncate text-[12px] font-extrabold uppercase leading-4 text-white sm:text-sm">
          {name}
        </h2>

        <p className="mt-0.5 truncate text-[11px] leading-4 text-slate-200 sm:text-xs">
          {city}
        </p>

        <p className="flex items-center gap-1 truncate text-[10px] leading-4 text-slate-300 sm:text-xs">
          <span aria-hidden="true">⚽Futebol</span>
          {sport}
        </p>
      </div>

      {/* Ação */}
      <Link
        href={profileHref ?? `/times/${id}`}
        aria-label={`Ver perfil do time ${name}`}
        className="relative z-10 flex shrink-0 items-center justify-center gap-1 rounded-md border border-slate-400/70 bg-slate-200 px-1.5 py-2 text-[9px] font-extrabold uppercase text-slate-900 shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:gap-1.5 sm:px-2.5 sm:text-[10px]"
      >
        <span>Ver perfil</span>
        <span aria-hidden="true" className="text-xs">
          ›
        </span>
      </Link>
    </article>
  );
}
