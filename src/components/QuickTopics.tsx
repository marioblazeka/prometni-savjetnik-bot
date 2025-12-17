import { Button } from "@/components/ui/button";
import {
  BikePathSign,
  HelmetSign,
  DangerSign,
  StopSign,
  NightDrivingSign,
  IntersectionSign
} from "@/components/TrafficSignsSVG";

interface QuickTopicsProps {
  onSelect: (topic: string) => void;
  chatInputRef?: React.RefObject<HTMLDivElement>;
}

const topics = [
  { Sign: BikePathSign, label: "Oprema bicikla", question: "Koja oprema mora biti na biciklu?" },
  { Sign: HelmetSign, label: "Kaciga", question: "Zašto je važno nositi kacigu?" },
  { Sign: DangerSign, label: "Prometni znakovi", question: "Koje vrste prometnih znakova postoje?" },
  { Sign: StopSign, label: "Pravila vožnje", question: "Koja su osnovna pravila vožnje biciklom?" },
  { Sign: NightDrivingSign, label: "Noćna vožnja", question: "Što moram imati za vožnju noću?" },
  // Namjerno eksplicitno, da uvijek otvori temu o raskrižju (bez zabune s drugim temama)
  { Sign: IntersectionSign, label: "Raskrižje", question: "Raskrižje: pravilo desne strane i prednost prolaska" },
];

export const QuickTopics = ({ onSelect, chatInputRef }: QuickTopicsProps) => {
  const handleClick = (question: string) => {
    onSelect(question);
    // Scroll to chat area
    setTimeout(() => {
      if (chatInputRef?.current) {
        chatInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
      // Also scroll window to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 200);
  };

  return (
    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
      {topics.map((topic) => (
        <Button
          key={topic.label}
          variant="outline"
          onClick={() => handleClick(topic.question)}
          className="flex flex-col items-center gap-1 sm:gap-2 h-auto py-2 sm:py-3 px-1 sm:px-3 border-2 border-secondary hover:border-primary hover:bg-primary/10 transition-all group"
        >
          <topic.Sign className="w-7 h-7 sm:w-10 sm:h-10" animate={false} />
          <span className="text-[10px] sm:text-xs font-medium text-center leading-tight">{topic.label}</span>
        </Button>
      ))}
    </div>
  );
};
