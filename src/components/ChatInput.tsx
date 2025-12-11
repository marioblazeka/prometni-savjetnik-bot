import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  onRandomQuestion: () => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, onRandomQuestion, disabled }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onRandomQuestion}
        disabled={disabled}
        className="flex-shrink-0 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
        title="Nasumično pitanje"
      >
        <Sparkles className="w-4 h-4" />
      </Button>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Pitaj me nešto o prometnim pravilima..."
        disabled={disabled}
        className="flex-1 border-2 border-secondary focus:border-primary transition-colors"
      />
      <Button
        type="submit"
        disabled={!input.trim() || disabled}
        className="flex-shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
      >
        <Send className="w-4 h-4 mr-2" />
        Pošalji
      </Button>
    </form>
  );
};