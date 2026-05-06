import logo from "@/assets/sga-logo.png";
import { Instagram, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-primary/30 bg-gradient-to-b from-background to-card mt-20">
    <div className="container py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={logo} alt="SGA League Ribeirão" className="h-12 w-auto" />
          <p className="text-sm text-muted-foreground font-body text-center md:text-left max-w-xs">
            SGA League Ribeirão — Campeonato presencial de League of Legends.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5516991069776"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-11 h-11 rounded border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="hex-divider my-8" />

      <p className="text-center text-xs text-muted-foreground font-body uppercase tracking-widest">
        © {new Date().getFullYear()} SGA League Ribeirão · Todos os direitos reservados
      </p>
    </div>
  </footer>
);
