interface ModeNavButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

export const ModeNavButton = ({ icon, label, active, onClick }: ModeNavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all font-semibold text-sm ${
        active 
          ? 'bg-primary text-primary-foreground shadow-md' 
          : 'bg-secondary/20 text-secondary-foreground hover:bg-primary/30'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};
