import { BackItem } from "@/components/ui/BackItem";
import NotificationItem from "@/components/ui/NotificationItem";
import { FaArrowLeft } from "react-icons/fa6";
import { GoGear } from "react-icons/go";

// /app/notifications/page.tsx
export default function NotificationsPage() {
  return (
    <div className="h-svh space-y-4">
      <div className="relative flex items-center justify-between">
        <BackItem title="Notificações"/>
        <GoGear className="absolute mr-2 right-0"/>
      </div>
      <div className="flex justify-between px-16">
        <p className="border-b">Geral</p>
        <p>Não lidas</p>
      </div>

      {/* seção */}
      <div className="flex flex-col px-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-400 text-sm mb-2">Hoje</h2>

          <NotificationItem
            icon="⚽"
            title="Gol da Várzea da Onça E.C!"
            description="Wkerlyson Batista abre o placar de 1 x 0 Vila Rica F.C"
            time="1 min atrás"
          />
          <NotificationItem
            icon="📅"
            title="Novo jogo marcado!"
            description="O novo jogo contra o Cipó dos Migueís F.C foi confirmado para Dom 05, abril."
            time="4 h min atrás"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-gray-400 text-sm mb-2">Ontem</h2>
          <NotificationItem
            icon="📊"
            title="Ranking atualizado"
            description="O ranking geral foi atualizado, seu clube subiu..."
            time="7 dias atrás"
          />
          <NotificationItem
            icon="✅"
            title="Vitória do seu Clube!"
            description="Milan F.C vence Boa Vista R.C por 1 - 0."
            time="7 dias atrás"
          />
        </div>
      </div>
    </div>
  );
}
