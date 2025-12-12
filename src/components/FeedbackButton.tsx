import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted-foreground hover:text-primary transition-colors gap-2"
      >
        <MessageSquare className="w-4 h-4" />
        Povratne informacije
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-card border-2 border-secondary rounded-lg p-4 shadow-xl min-w-[280px] z-50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="text-center">
              <h4 className="font-bold text-foreground mb-2">Komentari, ocjene i recenzije</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Pošalji nam svoje mišljenje o aplikaciji!
              </p>
              <a
                href="mailto:donjikraljevecwireless@gmail.com?subject=LDL Povratna informacija"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                donjikraljevecwireless@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
