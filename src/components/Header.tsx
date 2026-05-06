import logo from "@/assets/sga-logo.png";
import { MessageCircle } from "lucide-react";

interface Props {
  onOpenModal: () => void;
}

export const Header = ({ onOpenModal }: Props) => (
  <header className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-md border-b border-primary/20">
    <div className="container flex items-center justify-between py-4">
      <a href="#top" className="flex items-center">
        <img src={logo} alt="SGA League Ribeirão" className="h-10 md:h-12 w-auto" />
      </a>

      <nav className="hidden md:flex items-center gap-8 font-body font-semibold uppercase text-sm tracking-wider">
        <a href="#diferencial" className="text-foreground/80 hover:text-primary transition-colors">Diferenciais</a>
        <a href="#como-funciona" className="text-foreground/80 hover:text-primary transition-colors">Como funciona</a>
        <a href="#premiacoes" className="text-foreground/80 hover:text-primary transition-colors">Premiações</a>
        <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">F.A.Q</a>
      </nav>

      <button
        onClick={onOpenModal}
        className="flex items-center gap-2 px-4 py-2 rounded bg-gradient-gold text-primary-foreground font-display font-bold uppercase text-xs md:text-sm tracking-wider hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-all"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
    </div>
  </header>
);
