import Link from "next/link";

export function Navbar() {
  return (
    <nav style={{display:'flex', padding: 16, background: "#111", color: "#fff", justifyContent:'space-between' }}>
      <div>
        <Link href="/" style={{ marginRight: 12 }}>
          Home
        </Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <Link href="/login">Login/Registrar</Link>
    </nav>
  );
}
