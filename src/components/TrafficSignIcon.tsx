import { 
  Lightbulb, 
  HardHat, 
  ArrowRight, 
  Hand, 
  AlertTriangle, 
  PhoneOff, 
  GitBranch, 
  Ban, 
  Users, 
  CircleSlash 
} from "lucide-react";

interface TrafficSignIconProps {
  type: string;
  className?: string;
}

const signConfig: Record<string, { icon: React.ElementType; bgColor: string; borderColor: string }> = {
  lights: { icon: Lightbulb, bgColor: "bg-primary", borderColor: "border-secondary" },
  helmet: { icon: HardHat, bgColor: "bg-primary", borderColor: "border-secondary" },
  "right-side": { icon: ArrowRight, bgColor: "bg-blue-500", borderColor: "border-blue-700" },
  "hand-signal": { icon: Hand, bgColor: "bg-primary", borderColor: "border-secondary" },
  warning: { icon: AlertTriangle, bgColor: "bg-primary", borderColor: "border-destructive" },
  "no-phone": { icon: PhoneOff, bgColor: "bg-background", borderColor: "border-destructive" },
  intersection: { icon: GitBranch, bgColor: "bg-primary", borderColor: "border-secondary" },
  "no-holding": { icon: Ban, bgColor: "bg-background", borderColor: "border-destructive" },
  "single-file": { icon: Users, bgColor: "bg-blue-500", borderColor: "border-blue-700" },
  prohibition: { icon: CircleSlash, bgColor: "bg-background", borderColor: "border-destructive" },
};

export const TrafficSignIcon = ({ type, className = "" }: TrafficSignIconProps) => {
  const config = signConfig[type] || signConfig.warning;
  const IconComponent = config.icon;

  return (
    <div 
      className={`w-16 h-16 rounded-full ${config.bgColor} ${config.borderColor} border-4 flex items-center justify-center shadow-lg ${className}`}
    >
      <IconComponent className="w-8 h-8 text-secondary" />
    </div>
  );
};
