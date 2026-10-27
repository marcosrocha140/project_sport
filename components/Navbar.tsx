import Link from "next/link";

export function Navbar() {
  return (
    <nav className="hidden">
      <div className="flex p-4 bg-[#111] text-white justify-between">
        <div className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <Link href="/login">Login/Registrar</Link>
      </div>
    </nav>
  );
}
