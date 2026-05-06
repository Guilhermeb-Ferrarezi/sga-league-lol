import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroButton } from "@/components/HeroButton";
import { WhatsAppModal } from "@/components/WhatsAppModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Calendar, MapPin, Users, DollarSign, Swords, Video, Camera,
  Trophy, Medal, Star, Zap, Monitor, Shield, Crown,
} from "lucide-react";
import heroImg from "@/assets/lol-hero.jpg";
import arenaImg from "@/assets/lol-arena.jpg";
import trophyImg from "@/assets/lol-trophy.jpg";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  const differentials = [
    { icon: Shield, title: "100% presencial", desc: "Aqui não é online. É competição real, frente a frente, no estilo arena." },
    { icon: Video, title: "Sua gameplay ao vivo", desc: "Transmissão com HUD profissional, narrador e entrevistas. Seu jogo vira espetáculo." },
    { icon: Camera, title: "Você vira conteúdo", desc: "Bastidores, entrevistas e momentos reais que ficam registrados dentro e fora do jogo." },
    { icon: Swords, title: "Ambiente de competição real", desc: "Times separados, comunicação segura e foco total. Aqui é competição de verdade." },
    { icon: Monitor, title: "Mesmo setup pra todos", desc: "Mesma máquina, mesma performance. Aqui não é equipamento. É jogo." },
    { icon: Star, title: "Experiência completa", desc: "Fotógrafo, videomaker e cobertura completa do campeonato do início ao fim." },
  ];

  const faqs = [
    { q: "Como faço minha inscrição?", a: "A inscrição é feita pelo WhatsApp. Se você já tem time, é só verificar se ainda tem vaga e garantir sua participação. Se ainda não tem, pode montar o seu ou entrar em um time com ajuda da nossa organização. O valor é R$79,90 por competidor." },
    { q: "Posso participar mesmo sem time fechado?", a: "Sim. Se você não tem um time, pode chamar a gente no WhatsApp que ajudamos você a encontrar um time ou montar um do zero." },
    { q: "Qual o valor da inscrição?", a: "O valor é R$79,90 por competidor. Cada jogador garante sua própria vaga, então fica mais simples para participar, mesmo sem time completo." },
    { q: "Como funciona o formato do campeonato?", a: "O campeonato é 5v5 com 4 times. Formato de eliminação dupla, com chave superior e inferior." },
    { q: "Que horas começa o campeonato?", a: "Começa às 08h00, com o primeiro jogo já acontecendo ao vivo. Os horários das partidas são definidos após o fechamento das inscrições e o sorteio dos confrontos. Cada equipe recebe o horário exato do seu jogo. A previsão de encerramento é entre 21h e 22h." },
    { q: "O campeonato é realmente presencial?", a: "Sim. O campeonato é 100% presencial, com todos os jogadores competindo no mesmo local." },
    { q: "Os jogos são transmitidos ao vivo?", a: "Sim. Todas as partidas são transmitidas ao vivo com HUD profissional, narrador e cobertura completa." },
    { q: "Preciso levar meus periféricos?", a: "Sim. É obrigatório. Cada jogador deve levar seus próprios periféricos: mouse, teclado e headset. Não fornecemos, emprestamos ou alugamos periféricos no local. Toda a estrutura (computador, monitor, cadeira e ambiente) é fornecida." },
    { q: "Posso levar meu próprio computador ou monitor?", a: "Não. Toda a estrutura do campeonato já é fornecida pela organização. Cada jogador deve levar apenas seus próprios periféricos." },
    { q: "Posso jogar de casa ou de outro lugar?", a: "Não. O campeonato é 100% presencial e todos os jogadores da equipe devem competir no local do evento." },
    { q: "Pode levar comida ou bebida?", a: "Comida, sim. Bebida, não. Você pode levar alimentos, mas as bebidas devem ser consumidas no local conforme a disponibilidade da organização." },
    { q: "Posso levar acompanhantes?", a: "Sim. É permitido levar acompanhantes para assistir e acompanhar o campeonato no local." },
    { q: "Tem estacionamento?", a: "Sim, temos vagas limitadas no local. Além disso, também existem opções de estacionamento e vagas nas proximidades." },
  ];

  return (
    <div id="top" className="min-h-screen">
      <Header onOpenModal={openModal} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <img
          src={heroImg}
          alt="Arena épica de League of Legends com energia hextech"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container relative z-10 text-center py-20 animate-float-up">
          <p className="font-body uppercase tracking-[0.4em] text-secondary text-sm md:text-base mb-6 text-glow-blue">
            SGA League Ribeirão · 1ª Edição
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] mb-6">
            <span className="text-gradient-gold text-glow-gold">Campeonato</span>
            <br />
            <span className="text-foreground">de League of Legends</span>
          </h1>
          <p className="font-body text-lg md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10">
            O mais próximo que você vai chegar do{" "}
            <span className="text-primary font-semibold">cenário profissional</span> dentro de um
            campeonato amador.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <HeroButton variant="gold" onClick={openModal}>
              Garantir minha vaga
            </HeroButton>
            <HeroButton variant="outline" onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}>
              Saber mais
            </HeroButton>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 font-body text-foreground/70">
            <div className="flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" /><span>12/07/2026</span></div>
            <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /><span>Ribeirão Preto · SP</span></div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /><span>5v5 · 4 times</span></div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 relative">
        <div className="container max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
            A maioria dos campeonatos tenta te convencer com{" "}
            <span className="text-gradient-gold">prêmio</span>.
          </h2>
          <div className="hex-divider w-1/3 mx-auto mb-8" />
          <p className="font-body text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
            Aqui, a proposta é outra. Você não vem só pra competir.
            <br />
            Você vem pra <span className="text-primary font-semibold">viver o jogo de verdade</span>.
          </p>
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-6">
            A mesma pressão. A mesma emoção. A mesma sensação de um campeonato profissional.
          </p>
          <p className="font-display text-2xl md:text-4xl text-gradient-hextech text-glow-blue">
            Só que acessível.
          </p>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section id="diferencial" className="py-24 bg-card/40 relative">
        <div className="absolute inset-0 bg-gradient-radial-blue opacity-30" style={{ background: "var(--gradient-radial-blue)" }} />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="font-body uppercase tracking-[0.3em] text-secondary text-sm mb-4">Diferenciais</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              O que torna esse <span className="text-gradient-gold">campeonato</span> diferente
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((d, i) => (
              <div
                key={d.title}
                className="border-hextech bg-card/80 p-8 hover:bg-card transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded bg-gradient-gold flex items-center justify-center mb-5 group-hover:animate-pulse-glow">
                  <d.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-3 text-primary">
                  {String(i + 1).padStart(2, "0")}. {d.title}
                </h3>
                <p className="font-body text-foreground/75 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGINE */}
      <section className="py-24 relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Imagina <span className="text-gradient-hextech text-glow-blue">viver</span> isso.
            </h2>
            <ul className="space-y-4 font-body text-xl text-foreground/85">
              <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />Seu time entrando na arena.</li>
              <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />Seu nick aparecendo na transmissão.</li>
              <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />Narrador comentando sua jogada.</li>
              <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />Gente assistindo ao vivo.</li>
            </ul>
            <p className="mt-8 font-display text-2xl md:text-3xl text-gradient-gold">
              Cada partida vira um momento. E algumas… viram história.
            </p>
          </div>
          <div className="relative">
            <img
              src={arenaImg}
              alt="Arena de esports com jogadores em ação"
              loading="lazy"
              width={1280}
              height={832}
              className="rounded border-2 border-primary/40 shadow-[0_0_60px_hsl(var(--secondary)/0.3)]"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="py-24 bg-card/40">
        <div className="container">
          <div className="text-center mb-16">
            <p className="font-body uppercase tracking-[0.3em] text-secondary text-sm mb-4">
              Tudo que você precisa saber pra participar
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Como <span className="text-gradient-gold">funciona</span> o campeonato
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Calendar, label: "Data", value: "12/07/2026", sub: "Domingo · 08h00" },
              { icon: MapPin, label: "Local", value: "Ribeirão Preto", sub: "Av. Nove de Julho, 1992" },
              { icon: Swords, label: "Formato", value: "5v5 · 4 times", sub: "Eliminação dupla" },
              { icon: DollarSign, label: "Inscrição", value: "R$ 79,90", sub: "Por competidor" },
            ].map((item) => (
              <div key={item.label} className="border-hextech bg-card p-6 text-center">
                <item.icon className="w-8 h-8 mx-auto text-primary mb-3" />
                <p className="font-body uppercase text-xs tracking-widest text-muted-foreground">{item.label}</p>
                <p className="font-display text-2xl text-foreground mt-2">{item.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="border-hextech bg-card/80 p-8 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl text-primary mb-5 text-center">O que está incluso</h3>
            <ul className="grid sm:grid-cols-2 gap-3 font-body text-foreground/85">
              {[
                "Estrutura presencial completa",
                "Transmissão ao vivo com narração",
                "Cobertura com videomaker e fotógrafo",
                "Troféus e medalhas para os finalistas",
                "Registro no ranking oficial",
                "HUD profissional na transmissão",
              ].map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RECOGNITIONS */}
      <section id="premiacoes" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="font-body uppercase tracking-[0.3em] text-secondary text-sm mb-4">Reconhecimentos</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Entre na <span className="text-gradient-gold">história</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* 3rd */}
            <div className="border-hextech bg-card/70 p-8 md:mt-12">
              <Medal className="w-12 h-12 text-amber-700 mb-4" />
              <p className="font-body uppercase tracking-widest text-sm text-muted-foreground">3º Lugar</p>
              <h3 className="font-display text-2xl text-primary mt-1 mb-5">Entre os destaques</h3>
              <ul className="space-y-3 font-body text-foreground/80">
                <li>· Registro no ranking oficial</li>
                <li>· Destaque no histórico da edição</li>
                <li>· Acesso antecipado para próximas vagas</li>
              </ul>
            </div>

            {/* 1st */}
            <div className="border-hextech bg-gradient-to-b from-card to-primary/10 p-8 relative shadow-[0_0_60px_hsl(var(--primary)/0.4)] glow-gold">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <Crown className="w-12 h-12 text-primary text-glow-gold" />
              </div>
              <img src={trophyImg} alt="Troféu campeão" loading="lazy" width={1024} height={1024} className="w-32 h-32 object-cover mx-auto rounded mb-4" />
              <p className="font-body uppercase tracking-widest text-sm text-primary text-center">1º Lugar</p>
              <h3 className="font-display text-3xl text-gradient-gold text-center mt-1 mb-5">Nome na história</h3>
              <ul className="space-y-3 font-body text-foreground/90">
                <li>· Troféu personalizado da edição</li>
                <li>· Medalhas para cada jogador</li>
                <li>· Destaque máximo no ranking oficial</li>
                <li>· Registro no Hall dos Campeões</li>
                <li>· Conteúdo oficial nas redes</li>
                <li>· Destaque como campeão da edição</li>
              </ul>
            </div>

            {/* 2nd */}
            <div className="border-hextech bg-card/70 p-8 md:mt-12">
              <Trophy className="w-12 h-12 text-slate-300 mb-4" />
              <p className="font-body uppercase tracking-widest text-sm text-muted-foreground">2º Lugar</p>
              <h3 className="font-display text-2xl text-primary mt-1 mb-5">Destaque oficial</h3>
              <ul className="space-y-3 font-body text-foreground/80">
                <li>· Medalhas personalizadas</li>
                <li>· Destaque no ranking oficial</li>
                <li>· Registro na edição do campeonato</li>
                <li>· Prioridade na próxima inscrição</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hextech opacity-10" />
        <div className="container text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Se você quer <span className="text-muted-foreground italic">só jogar</span>,
            <br />qualquer lugar serve.
          </h2>
          <p className="font-body text-xl md:text-2xl text-foreground/80 mb-10">
            Agora, se você quer viver algo diferente…
            <br />
            <span className="text-gradient-gold font-display text-3xl md:text-4xl">essa é a sua chance.</span>
          </p>
          <HeroButton variant="gold" onClick={openModal}>
            Quero participar
          </HeroButton>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-card/40">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <p className="font-body uppercase tracking-[0.3em] text-secondary text-sm mb-4">F.A.Q</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Perguntas <span className="text-gradient-gold">frequentes</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-4">
              Tire suas dúvidas sobre o campeonato
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-primary/30 rounded bg-card px-5 hover:border-primary/60 transition-colors"
              >
                <AccordionTrigger className="font-display text-left text-lg text-foreground hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base text-foreground/80 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative">
        <div className="container text-center">
          <p className="font-body uppercase tracking-[0.4em] text-secondary text-sm mb-4">Campeonato</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
            Como você quer <span className="text-gradient-gold">participar</span>?
          </h2>
          <p className="font-body text-lg text-foreground/80 mb-10 max-w-xl mx-auto">
            Escolha uma opção e te direcionamos ao atendimento certo no WhatsApp.
          </p>
          <HeroButton variant="gold" onClick={openModal}>
            Falar no WhatsApp
          </HeroButton>
        </div>
      </section>

      <Footer />
      <WhatsAppModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
