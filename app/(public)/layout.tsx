import { Navbar } from "@/components/Navbar";
import { NavBottom } from "@/components/NavBottom";
import { Navigation } from "@/components/Navigation";


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="mt-16">{children}</main>
      <NavBottom/>
    </>
  );
}
