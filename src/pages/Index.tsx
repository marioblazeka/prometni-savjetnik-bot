import { useRef, useEffect, useState } from "react";
import { Bike, MessageCircle, GraduationCap } from "lucide-react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { QuickTopics } from "@/components/QuickTopics";
import { QuizMode } from "@/components/QuizMode";
import { ModeNavButton } from "@/components/ModeNavButton";
import { FeedbackButton } from "@/components/FeedbackButton";
import { AnimatedTrafficSigns } from "@/components/TrafficSignsSVG";
import { useChatbot } from "@/hooks/useChatbot";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { ScrollArea } from "@/components/ui/scroll-area";

type ViewMode = 'chat' | 'quiz';

const Index = () => {
  const { messages, isTyping, sendMessage, askRandomQuestion } = useChatbot();
  const { playClick, playMessage } = useSoundEffects();
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('chat');

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (messages.length > 1) {
      playMessage();
    }
  }, [messages.length]);

  const handleModeChange = (mode: ViewMode) => {
    playClick();
    setViewMode(mode);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground p-3 sm:p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center animate-pulse-glow flex-shrink-0">
              <Bike className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight">LDL</h1>
              <p className="text-[10px] sm:text-xs text-secondary-foreground/70 truncate">Virtualni pomoćnik za učenje prometnih pravila</p>
            </div>
          </div>
          
          {/* Mode navigation */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div className="hidden sm:flex">
              <AnimatedTrafficSigns />
            </div>
            <div className="flex items-center gap-1 sm:gap-2 sm:ml-4">
              <ModeNavButton 
                icon={<MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />}
                label="Chat"
                active={viewMode === 'chat'}
                onClick={() => handleModeChange('chat')}
              />
              <ModeNavButton 
                icon={<GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />}
                label="Kviz"
                active={viewMode === 'quiz'}
                onClick={() => handleModeChange('quiz')}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Stripe decoration */}
      <div className="h-2 stripe-pattern" />

      {/* Main content */}
      <main className="flex-1 container mx-auto p-2 sm:p-4 flex flex-col max-w-3xl">
        {viewMode === 'chat' ? (
          <>
            {/* Quick topics */}
            <div className="mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 font-semibold">Brze teme:</p>
              <QuickTopics onSelect={sendMessage} chatInputRef={chatInputRef} />
            </div>

            {/* Chat area */}
            <div 
              className="flex-1 bg-card rounded-lg border-2 border-secondary shadow-xl overflow-hidden flex flex-col min-h-[300px] sm:min-h-[400px]"
            >
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
              <div ref={chatInputRef} className="p-3 sm:p-4 border-t-2 border-secondary bg-muted/30">
                <ChatInput
                  onSend={sendMessage}
                  onRandomQuestion={askRandomQuestion}
                  disabled={isTyping}
                />
              </div>
            </div>
          </>
        ) : (
          <QuizMode onClose={() => handleModeChange('chat')} />
        )}

        {/* Footer */}
        <footer className="mt-4 text-center text-xs text-muted-foreground space-y-2">
          <p className="font-bold text-primary">#radionicamehatronike</p>
          <p>autor: <span className="font-semibold">m_ario</span></p>
          <FeedbackButton />
          <p className="text-muted-foreground/70">
            Powered by <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">lovable.dev</a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
