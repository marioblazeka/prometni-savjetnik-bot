import qrPoligon from "@/assets/qr-poligon.png";
import qrZnakovi from "@/assets/qr-znakovi.png";

export const VideoLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      <a 
        href="https://www.youtube.com/shorts/U8JA6ukySbU" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 p-3 bg-card rounded-lg border-2 border-secondary hover:border-primary transition-all hover:shadow-lg group"
      >
        <img 
          src={qrPoligon} 
          alt="QR kod - Poligon video" 
          className="w-16 h-16 sm:w-20 sm:h-20 group-hover:scale-105 transition-transform"
        />
        <span className="text-[10px] sm:text-xs font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
          🎬 Poligon
        </span>
      </a>
      <a 
        href="https://www.youtube.com/watch?v=QJFUuKvgBis" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 p-3 bg-card rounded-lg border-2 border-secondary hover:border-primary transition-all hover:shadow-lg group"
      >
        <img 
          src={qrZnakovi} 
          alt="QR kod - Znakovi video" 
          className="w-16 h-16 sm:w-20 sm:h-20 group-hover:scale-105 transition-transform"
        />
        <span className="text-[10px] sm:text-xs font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
          🎬 Prometni znakovi
        </span>
      </a>
    </div>
  );
};
