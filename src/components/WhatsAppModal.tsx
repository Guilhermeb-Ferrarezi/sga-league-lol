import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Users, UserPlus } from "lucide-react";

const PHONE = "5516991069776";

const buildLink = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WhatsAppModal = ({ open, onOpenChange }: Props) => {
  const options = [
    {
      icon: Users,
      title: "Já tenho time",
      description: "Quero garantir as vagas do meu time no campeonato.",
      message: "Olá! Já tenho time e quero garantir nossa vaga no SGA League Ribeirão - Campeonato de LOL.",
    },
    {
      icon: UserPlus,
      title: "Quero ajuda para fazer um time",
      description: "Não tenho time fechado e quero ajuda para montar ou entrar em um.",
      message: "Olá! Quero participar do SGA League Ribeirão - Campeonato de LOL e preciso de ajuda para fazer um time.",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-hextech sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display text-gradient-gold text-center">
            Como você quer participar?
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground text-base font-body">
            Escolha uma opção abaixo para te direcionarmos ao atendimento certo no WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 mt-4">
          {options.map((opt) => (
            <a
              key={opt.title}
              href={buildLink(opt.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 rounded border border-primary/30 bg-gradient-to-br from-card to-muted/40 hover:border-primary hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                <opt.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg text-primary group-hover:text-glow-gold">
                  {opt.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  {opt.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
