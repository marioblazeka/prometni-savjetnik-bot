import { Button } from "@/components/ui/button";
import { 
  Bike, 
  AlertTriangle, 
  Shield, 
  Navigation, 
  Lightbulb,
  HelpCircle
} from "lucide-react";

interface QuickTopicsProps {
  onSelect: (topic: string) => void;
}

const topics = [
  { icon: Bike, label: "Oprema bicikla", question: "Koja oprema mora biti na biciklu?" },
  { icon: Shield, label: "Kaciga", question: "Zašto je važno nositi kacigu?" },
  { icon: AlertTriangle, label: "Prometni znakovi", question: "Koje vrste prometnih znakova postoje?" },
  { icon: Navigation, label: "Pravila vožnje", question: "Koja su osnovna pravila vožnje biciklom?" },
  { icon: Lightbulb, label: "Noćna vožnja", question: "Što moram imati za vožnju noću?" },
  { icon: HelpCircle, label: "Raskrižje", question: "Kako se ponašam na raskrižju?" },
];

export const QuickTopics = ({ onSelect }: QuickTopicsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {topics.map((topic) => (
        <Button
          key={topic.label}
          variant="outline"
          onClick={() => onSelect(topic.question)}
          className="flex flex-col items-center gap-2 h-auto py-3 border-2 border-secondary hover:border-primary hover:bg-primary/10 transition-all group"
        >
          <topic.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
          <span className="text-xs font-medium">{topic.label}</span>
        </Button>
      ))}
    </div>
  );
};