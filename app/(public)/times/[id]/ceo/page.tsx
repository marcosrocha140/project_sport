"use client";
import { CEOInfor } from "@/components/ui/CEOInfor";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const [clube, setClube] = useState<any>(null);

  useEffect(() => {
    async function fetchClube() {
      try {
        const id = params?.id;
        if (!id) return;
        const res = await fetch(`/api/clubs/${id}`);
        if (res.ok) {
          const data = await res.json();
          setClube(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchClube();
  }, [params?.id]);

  return <CEOInfor clube={clube} />;
}