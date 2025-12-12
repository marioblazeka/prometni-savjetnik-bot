import { motion } from "framer-motion";

interface TrafficSignProps {
  className?: string;
  animate?: boolean;
}

// Znak opasnosti - trokut
export const DangerSign = ({ className = "", animate = true }: TrafficSignProps) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className}`}
    initial={animate ? { scale: 0, rotate: -180 } : false}
    animate={animate ? { scale: 1, rotate: 0 } : false}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    <polygon
      points="50,10 90,85 10,85"
      fill="#fff"
      stroke="#dc2626"
      strokeWidth="6"
    />
    <text x="50" y="65" textAnchor="middle" fontSize="30" fill="#dc2626" fontWeight="bold">!</text>
  </motion.svg>
);

// Znak zabrane - krug s crvenim rubom
export const ProhibitionSign = ({ className = "", animate = true }: TrafficSignProps) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className}`}
    initial={animate ? { scale: 0 } : false}
    animate={animate ? { scale: 1 } : false}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="42" fill="#fff" stroke="#dc2626" strokeWidth="8" />
    <line x1="25" y1="25" x2="75" y2="75" stroke="#dc2626" strokeWidth="6" />
  </motion.svg>
);

// Biciklistička staza - plavi krug s biciklom
export const BikePathSign = ({ className = "", animate = true }: TrafficSignProps) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className}`}
    initial={animate ? { scale: 0 } : false}
    animate={animate ? { scale: 1 } : false}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="45" fill="#2563eb" />
    <g fill="none" stroke="#fff" strokeWidth="3">
      {/* Kotači */}
      <circle cx="32" cy="60" r="12" />
      <circle cx="68" cy="60" r="12" />
      {/* Okvir */}
      <line x1="32" y1="60" x2="50" y2="45" />
      <line x1="50" y1="45" x2="68" y2="60" />
      <line x1="50" y1="45" x2="50" y2="30" />
      <line x1="45" y1="32" x2="55" y2="32" />
      {/* Sjedalo */}
      <line x1="38" y1="40" x2="48" y2="40" />
      <line x1="43" y1="40" x2="50" y2="45" />
    </g>
  </motion.svg>
);

// STOP znak
export const StopSign = ({ className = "", animate = true }: TrafficSignProps) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className}`}
    initial={animate ? { scale: 0, rotate: -90 } : false}
    animate={animate ? { scale: 1, rotate: 0 } : false}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
    whileHover={{ scale: 1.1, rotate: -5 }}
  >
    <polygon
      points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
      fill="#dc2626"
      stroke="#fff"
      strokeWidth="3"
    />
    <text x="50" y="58" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">STOP</text>
  </motion.svg>
);

// Znak obavijesti - pravokutnik
export const InfoSign = ({ className = "", animate = true }: TrafficSignProps) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className}`}
    initial={animate ? { y: -20, opacity: 0 } : false}
    animate={animate ? { y: 0, opacity: 1 } : false}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
    whileHover={{ scale: 1.1 }}
  >
    <rect x="10" y="20" width="80" height="60" rx="5" fill="#2563eb" stroke="#fff" strokeWidth="3" />
    <text x="50" y="58" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">i</text>
  </motion.svg>
);

// Znak kacige
export const HelmetSign = ({ className = "", animate = true }: TrafficSignProps) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className}`}
    initial={animate ? { scale: 0 } : false}
    animate={animate ? { scale: 1 } : false}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
    whileHover={{ scale: 1.1, y: -3 }}
  >
    <circle cx="50" cy="50" r="45" fill="#16a34a" />
    <ellipse cx="50" cy="45" rx="28" ry="20" fill="#fff" />
    <path d="M22 50 Q50 70 78 50" fill="#fff" stroke="#16a34a" strokeWidth="2" />
    <ellipse cx="50" cy="55" rx="20" ry="8" fill="none" stroke="#16a34a" strokeWidth="2" />
  </motion.svg>
);

// Noćna vožnja - mjesec i svjetla
export const NightDrivingSign = ({ className = "", animate = true }: TrafficSignProps) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className}`}
    initial={animate ? { opacity: 0 } : false}
    animate={animate ? { opacity: 1 } : false}
    transition={{ duration: 0.5, delay: 0.25 }}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="45" fill="#1e3a5f" />
    {/* Mjesec */}
    <path d="M35 25 Q55 30 55 50 Q55 70 35 75 Q60 70 60 50 Q60 30 35 25" fill="#fbbf24" />
    {/* Svjetla */}
    <motion.circle
      cx="30"
      cy="70"
      r="8"
      fill="#fbbf24"
      animate={animate ? { opacity: [1, 0.5, 1] } : false}
      transition={{ repeat: Infinity, duration: 1 }}
    />
    <motion.circle
      cx="70"
      cy="70"
      r="8"
      fill="#dc2626"
      animate={animate ? { opacity: [1, 0.5, 1] } : false}
      transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}
    />
  </motion.svg>
);

// Raskrižje
export const IntersectionSign = ({ className = "", animate = true }: TrafficSignProps) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className}`}
    initial={animate ? { scale: 0, rotate: -180 } : false}
    animate={animate ? { scale: 1, rotate: 0 } : false}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.35 }}
    whileHover={{ scale: 1.1 }}
  >
    <polygon
      points="50,5 95,85 5,85"
      fill="#fff"
      stroke="#dc2626"
      strokeWidth="6"
    />
    {/* Križanje */}
    <line x1="50" y1="30" x2="50" y2="70" stroke="#000" strokeWidth="4" />
    <line x1="35" y1="50" x2="65" y2="50" stroke="#000" strokeWidth="4" />
  </motion.svg>
);

// Animirani dekorativni znakovi za header
export const AnimatedTrafficSigns = () => (
  <div className="flex items-center gap-2">
    <BikePathSign className="w-8 h-8" />
    <StopSign className="w-8 h-8" />
    <DangerSign className="w-8 h-8" />
  </div>
);
