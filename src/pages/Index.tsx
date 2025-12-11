import { useRef, useEffect } from "react";
import { Bike, AlertTriangle } from "lucide-react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { QuickTopics } from "@/components/QuickTopics";
import { useChatbot } from "@/hooks/useChatbot";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const { messages, isTyping, sendMessage, askRandomQuestion } = useChatbot();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
              <Bike className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">LDL</h1>
              <p className="text-xs text-secondary-foreground/70">Lukas - Digitalni Lektor</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
            <AlertTriangle className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold">Biciklistički ispit</span>
          </div>
        </div>
      </header>

      {/* Stripe decoration */}
      <div className="h-2 stripe-pattern" />

      {/* Main content */}
      <main className="flex-1 container mx-auto p-4 flex flex-col max-w-3xl">
        {/* Quick topics */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2 font-semibold">Brze teme:</p>
          <QuickTopics onSelect={sendMessage} />
        </div>

        {/* Chat area */}
        <div className="flex-1 bg-card rounded-lg border-2 border-secondary shadow-xl overflow-hidden flex flex-col min-h-[400px]">
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isBot={message.isBot}
                  timestamp={message.timestamp}
                />
              ))}
              {isTyping && (
                <div className="flex gap-3 p-4 bg-secondary rounded-lg animate-pulse">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Bike className="w-5 h-5 text-primary-foreground animate-bounce-slow" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input area */}
          <div className="p-4 border-t-2 border-secondary bg-muted/30">
            <ChatInput
              onSend={sendMessage}
              onRandomQuestion={askRandomQuestion}
              disabled={isTyping}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-4 text-center text-xs text-muted-foreground">
          <p>📚 Sadržaj temeljen na HAK priručniku "Biciklom sigurno u promet"</p>
          <p className="mt-1">🎓 Za učenike 5. - 8. razreda osnovne škole</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;