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
  chatRef?: React.RefObject<HTMLDivElement>;
}

const topics = [
  { Sign: BikePathSign, label: "Oprema bicikla", question: "Koja oprema mora biti na biciklu?" },
  { Sign: HelmetSign, label: "Kaciga", question: "Zašto je važno nositi kacigu?" },
  { Sign: DangerSign, label: "Prometni znakovi", question: "Koje vrste prometnih znakova postoje?" },
  { Sign: StopSign, label: "Pravila vožnje", question: "Koja su osnovna pravila vožnje biciklom?" },
  { Sign: NightDrivingSign, label: "Noćna vožnja", question: "Što moram imati za vožnju noću?" },
  { Sign: IntersectionSign, label: "Raskrižje", question: "Kako se ponašam na raskrižju?" },
];

export const QuickTopics = ({ onSelect, chatRef }: QuickTopicsProps) => {
  const handleClick = (question: string) => {
    onSelect(question);
    // Scroll to chat area
    setTimeout(() => {
      chatRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {topics.map((topic, index) => (
        <Button
          key={topic.label}
          variant="outline"
          onClick={() => handleClick(topic.question)}
          className="flex flex-col items-center gap-2 h-auto py-3 border-2 border-secondary hover:border-primary hover:bg-primary/10 transition-all group"
        >
          <topic.Sign className="w-10 h-10" animate={false} />
          <span className="text-xs font-medium">{topic.label}</span>
        </Button>
      ))}
    </div>
  );
};
