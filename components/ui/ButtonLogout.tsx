"use client";

import { MdLogout } from "react-icons/md";
import { IoIosExit } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function ButtonLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer logout");
      }

      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Erro no logout:", error);
    }
  };

  return (
    <button type="button" onClick={handleLogout}>
      <IoIosExit className="text-gray-300 text-2xl" />
    </button>
  );
}
