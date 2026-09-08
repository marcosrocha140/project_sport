'use client'

import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function BackItem({title}: { title: string}) {
    const router = useRouter();
  return (
    <div className="flex px-2 items-center text-gray-300 border-b-2 border-[#1b1b1b93] w-full mb-1 gap-4 px-1 py-2.5">
      <FaArrowLeft onClick={() => router.back()} className="text-2xl" />
      <h2 className="text-xl">{title}</h2> 
    </div>
  );
}
