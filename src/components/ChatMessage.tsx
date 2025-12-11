import { cn } from "@/lib/utils";
import { Bike, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp?: Date;
}

export const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300",
        isBot
          ? "bg-secondary text-secondary-foreground"
          : "bg-primary/20 ml-8"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
          isBot ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        )}
      >
        {isBot ? <Bike className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-sm">
            {isBot ? "Lukas 🚴" : "Ti"}
          </span>
          {timestamp && (
            <span className="text-xs text-muted-foreground">
              {timestamp.toLocaleTimeString("hr-HR", { hour: "2-digit", minute: "2-digit" })}
            </span>
          )}
        </div>
        <p className="text-sm whitespace-pre-wrap break-words">{message}</p>
      </div>
    </div>
  );
};