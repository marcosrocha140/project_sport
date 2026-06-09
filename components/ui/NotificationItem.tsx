import { FaRegClock } from "react-icons/fa6";

interface notificationProps{
    icon: String,
    title: String,
    description: String,
    time: String
} 


export default function NotificationItem({icon, title, description, time}: notificationProps) {
  return (
    <div className="flex items-start gap-2 p-2 rounded-lg border border-gray-500 hover:bg-white/5 cursor-pointer">
      
      {/* ícone */}
      <div className="text-green-400 text-lg">{icon}</div>

      {/* conteúdo */}
      <div className="flex flex-col w-full">
        <p className="text-white text-sm">
          {title}
        </p>
        <span className="text-xs text-gray-400">
          {description}
        </span>
        <span className="text-xs text-right text-gray-400">
          {time}
        </span>
      </div>
    </div>
  );
}