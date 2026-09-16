import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Instagram, MapPin, Menu, MessageCircle, Play, ShoppingBag, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rhythm-hero.jpg";
import studioImage from "@/assets/rhythm-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Rhythm Studio | Pole & Movement Arts" },
    { name: "description", content: "Rhythm Studio is Bengaluru's premium sanctuary for pole fitness, movement, and contemporary flow." },
    { property: "og:title", content: "Rhythm Studio | Pole & Movement Arts" },
    { property: "og:description", content: "Discover architectural movement, strength, and contemporary flow at Rhythm Studio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

const classes = [
  { name: "Open Practice", type: "Self", detail: "Unstructured studio time to practice independently. Access all poles, mats and props. An instructor is always present for guidance and safety." },
  { name: "Exotic Beginners", type: "Group", detail: "Learn confident, expressive movement through beginner-friendly choreography and foundational transitions." },
  { name: "Private Exotic Session", type: "Group", detail: "A focused choreography session shaped around your movement vocabulary, musicality, and personal goals." },
  { name: "Private Pole Session", type: "Private", detail: "One-to-one coaching for precise technique, progressive strength, and assured movement on the pole." },
  { name: "Advanced Pole", type: "Group", detail: "Complex combinations, dynamic transitions, and elevated control for experienced pole artists." },
];

const archive = [
  ["Contemporary", "Neon Silhouette Flow", "An exploration of fluid spin transitions and body lines under vibrant neon contrasts."],
  ["Modern Flow", "Choreography Study", "Capturing control and momentum through sharp, expressive floor sequences."],
  ["Expressive Motion", "Poise & Expression", "A study of grace, flexibility, and emotional release in motion."],
  ["Yoga & Control", "Foundational Balance", "Focusing on grounding, core stability, and precise alignment."],
];

function BrandMark() {
  return <a href="#top" aria-label="Rhythm Studio home" className="grid size-12 shrink-0 place-items-center rounded-full bg-espresso text-primary-foreground md:size-14"><span className="font-display text-[10px] italic leading-none">R</span><span className="-mt-3 text-[6px] uppercase tracking-[0.2em]">Rhythm</span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Classes", "Schedule", "Pricing", "Instructors", "About"];
  return <header className="fixed inset-x-0 top-0 z-50 border-t-[3px] border-gold border-b border-border/50 bg-background/90 backdrop-blur-xl">
    <div className="mx-auto grid h-[72px] max-w-[1360px] grid-cols-[auto_1fr_auto] items-center px-5 md:px-10">
      <BrandMark />
      <nav className="ml-7 hidden items-center gap-7 md:flex">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-[13px] transition-colors hover:text-gold">{link}</a>)}</nav>
      <div className="flex items-center gap-3">
        <a href="#classes" aria-label="View bookings" className="grid size-10 place-items-center transition-colors hover:text-gold"><ShoppingBag className="size-[18px]" /></a>
        <a href="#footer" className="hidden px-2 text-[13px] hover:text-gold md:block">Sign in</a>
        <Button asChild className="hidden h-10 rounded-lg px-6 text-[11px] uppercase tracking-[0.16em] shadow-lg md:inline-flex"><a href="#classes"><CalendarDays /> Book a Class</a></Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav className="border-t border-border bg-background px-6 py-6 md:hidden">{links.map((link) => <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="block border-b border-border/60 py-4 font-display text-2xl">{link}</a>)}</nav>}
  </header>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-gold" : "text-gold"}`}><Sparkles className="size-3" />{children}</p>;
}

function Hero() {
  return <section id="top" className="relative min-h-screen overflow-hidden bg-background pt-[72px]">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,var(--gold-soft),transparent_22%),radial-gradient(circle_at_83%_80%,var(--gold-soft),transparent_20%)] opacity-50" />
    <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1360px] items-center gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1fr_0.9fr_1fr] lg:gap-12 lg:py-24">
      <div className="reveal-up text-center lg:text-left">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-gold-soft/50 px-4 py-2 text-[10px] font-semibold uppercase text-gold"><Sparkles className="size-3" /> Mumbai's premier pole sanctuary</div>
        <h1 className="font-display text-[42px] leading-[1.08] sm:text-[52px] lg:text-[60px]">Architectural<br />Movement &<br /><em className="text-gold">Artistry.</em></h1>
        <div className="mx-auto my-8 h-px w-16 bg-gold lg:mx-0" />
        <p className="mx-auto max-w-md text-sm font-light leading-7 text-muted-foreground lg:mx-0">Step into a space where movement becomes living sculpture. We guide you through the architectural lines of pole fitness, flow, and aerial arts—crafted with precision, designed for expression.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-[390px]">
          <Button asChild className="h-12 rounded-lg text-[10px] uppercase tracking-[0.2em] shadow-xl"><a href="#classes">Explore Classes <ArrowRight /></a></Button>
          <Button asChild variant="outline" className="h-12 rounded-lg text-[10px] uppercase tracking-[0.2em]"><a href="#schedule">View Schedule</a></Button>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[380px] lg:max-w-none">
        <div className="overflow-hidden rounded-t-[48%] border-[7px] border-card shadow-2xl ring-1 ring-border"><img src={heroImage} alt="Contemporary movement artist at Rhythm Studio" width={1024} height={1536} fetchPriority="high" className="aspect-[.69] w-full object-cover object-top" /></div>
        <div className="drift absolute -right-4 bottom-[-18px] size-20 overflow-hidden rounded-full border-4 border-card shadow-xl"><img src={studioImage} alt="Rhythm Studio interior" width={1536} height={1024} className="h-full w-full object-cover" /></div>
      </div>
      <div className="hidden space-y-7 lg:block">
        <div className="flex items-center gap-4 rounded-xl bg-espresso px-5 py-4 text-primary-foreground shadow-lg"><span className="grid size-9 place-items-center rounded-lg bg-primary-foreground/10"><Play className="size-3 fill-current" /></span><span className="text-[9px] font-semibold uppercase tracking-[.12em]">Live Studio Flow<small className="mt-1 block text-[7px] font-normal text-primary-foreground/50">Koramangala, BLR</small></span></div>
        {[['500+','Active Students'],['12+','Certified Artists'],['4.9*','Studio Rating']].map(([n,l]) => <div key={l} className="border-b border-border/50 pb-4"><strong className="font-display text-2xl font-normal">{n}</strong><span className="block text-[8px] uppercase tracking-[.15em] text-muted-foreground">{l}</span></div>)}
        <div className="rounded-xl border border-border bg-card px-5 py-4 text-[10px]"><strong>Elena Rostova</strong><span className="block text-[7px] uppercase text-muted-foreground">Founder / Signatory</span></div>
      </div>
    </div>
  </section>;
}

function Vision() {
  const values = [["01","Precision Technique","Every grip, lift, and spin is broken down with biomechanical alignment to ensure safety and elegant execution."],["02","Elena Rostova’s Method","Ballet posture, contemporary expression, and core suspension come together in fluid, gravity-defying flows."],["03","A Premium Sanctuary","High ceilings, top-tier safety rigging, and curated lighting create a refined space for your practice."]];
  return <section id="about" className="bg-ivory-deep py-24 md:py-36"><div className="mx-auto grid max-w-[1200px] gap-16 px-5 md:px-10 lg:grid-cols-[.85fr_1.15fr]">
    <div><Eyebrow>Our vision & roots</Eyebrow><h2 className="font-display text-[42px] leading-[1.1] md:text-[52px]">Where Movement<br />Becomes <em className="text-gold">Art</em></h2><p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">Rhythm Studio is more than a fitness space. It is a premium design studio where physical conditioning, poise, and absolute creative expression intersect.</p><a href="#footer" className="mt-8 inline-flex items-center gap-3 border-b border-gold pb-2 text-[10px] font-semibold uppercase tracking-[.18em]">Explore our heritage <ArrowRight className="size-3" /></a></div>
    <div className="divide-y divide-border">{values.map(([n,t,d]) => <article key={n} className="grid gap-5 py-7 first:pt-0 sm:grid-cols-[48px_1fr]"><span className="font-display text-xl text-gold">{n}</span><div><h3 className="font-display text-2xl">{t}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{d}</p></div></article>)}</div>
  </div></section>;
}

function Classes() {
  const [active, setActive] = useState(0);
  return <section id="classes" className="bg-background py-24 md:py-36"><div className="mx-auto max-w-[1200px] px-5 md:px-10">
    <Eyebrow>Interactive showcase</Eyebrow><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="font-display text-[42px] md:text-[52px]">Spotlight Classes</h2><p className="max-w-sm text-sm leading-6 text-muted-foreground">Explore classes to preview their structure, required level, and book instant sessions.</p></div>
    <div className="grid overflow-hidden border-y border-border lg:grid-cols-[1fr_1.05fr]">
      <div>{classes.map((item,i) => <button key={item.name} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} className={`grid w-full grid-cols-[45px_1fr_auto] items-center border-b border-border px-2 py-5 text-left transition-all last:border-0 ${active===i ? 'bg-ivory-deep pl-5' : 'hover:bg-secondary/50'}`}><span className="font-display text-gold">0{i+1}</span><span className="font-display text-xl md:text-2xl">{item.name}</span><span className="text-[8px] uppercase tracking-[.15em] text-muted-foreground">{item.type}</span></button>)}</div>
      <div className="relative min-h-[440px] overflow-hidden bg-espresso"><img src={studioImage} alt="Pole movement class at Rhythm Studio" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground md:p-10"><p className="text-[9px] uppercase tracking-[.2em] text-gold">Class spotlight</p><h3 className="mt-3 font-display text-3xl uppercase">{classes[active]?.name ?? "Open Practice"}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-primary-foreground/70">{classes[active]?.detail ?? "Unstructured studio time to practice independently with instructor guidance."}</p><div className="mt-7 flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.15em]">60 Mins Session</span><Button asChild variant="secondary"><a href="#schedule">Book now <ArrowRight /></a></Button></div></div></div>
    </div>
  </div></section>;
}

function Archives() {
  return <section id="instructors" className="bg-espresso py-24 text-primary-foreground md:py-36"><div className="mx-auto max-w-[1200px] px-5 md:px-10">
    <Eyebrow light>Motion galleries</Eyebrow><h2 className="font-display text-[42px] md:text-[52px]">Motion Archives</h2><p className="mt-4 text-sm text-primary-foreground/50">Witness the structural poise and flow of our studio in curated reels.</p>
    <div className="mt-14 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <article className="group relative min-h-[520px] overflow-hidden rounded-[28px] border border-gold/30"><img src={heroImage} alt="Neon silhouette movement flow" width={1024} height={1536} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent"/><div className="absolute bottom-0 p-8"><p className="text-[9px] uppercase tracking-[.2em] text-gold">Featured reel</p><h3 className="mt-3 font-display text-3xl">Neon Silhouette Flow</h3><p className="mt-2 max-w-sm text-xs leading-5 text-primary-foreground/60">Contemporary — An exploration of fluid spin transitions and body lines under vibrant contrasts.</p></div></article>
      <div className="grid gap-4">{archive.map(([cat,title,desc],i)=><article key={title} className="group grid min-h-28 grid-cols-[76px_1fr_auto] items-center gap-5 rounded-2xl border border-gold/15 p-4 transition-colors hover:border-gold/50 hover:bg-primary-foreground/[.03]"><div className="grid h-full place-items-center rounded-xl bg-primary-foreground/5"><Play className="size-4 fill-current" /></div><div><p className="text-[8px] uppercase tracking-[.2em] text-gold">{cat}</p><h3 className="mt-2 font-display text-xl md:text-2xl">{title}</h3><p className="mt-1 hidden text-xs text-primary-foreground/45 sm:block">{desc}</p></div><span className="self-start p-2 text-[9px] text-primary-foreground/35">0{i+1}</span></article>)}</div>
    </div>
  </div></section>;
}

function Footer() {
  return <><section className="relative overflow-hidden bg-background py-28 text-center"><div className="absolute inset-0 bg-[radial-gradient(circle,var(--gold-soft),transparent_45%)] opacity-55"/><blockquote className="relative mx-auto max-w-4xl px-6"><span className="font-display text-6xl text-gold/20">”</span><p className="font-display text-3xl italic leading-snug md:text-5xl">At Rhythm, movement becomes a flow— where strength and control reveal the most powerful, beautiful version of you.</p><footer className="mt-8 text-[9px] font-semibold uppercase tracking-[.35em] text-gold">— Rhythm Pole Studio Philosophy</footer></blockquote></section>
  <footer id="footer" className="bg-espresso py-16 text-primary-foreground"><div className="mx-auto max-w-[1240px] px-5 md:px-10"><div className="grid gap-12 border-b border-gold/20 pb-14 md:grid-cols-2 lg:grid-cols-4"><div><BrandMark/><p className="mt-6 max-w-xs text-xs leading-6 text-primary-foreground/50">Step into Bengaluru's premier sanctuary for architectural movement, strength, and contemporary flow.</p><div className="mt-5 flex gap-3"><a href="#top" aria-label="Instagram" className="grid size-9 place-items-center rounded-lg border border-gold/30 hover:text-gold"><Instagram className="size-4"/></a><a href="#top" aria-label="WhatsApp" className="grid size-9 place-items-center rounded-lg border border-gold/30 hover:text-gold"><MessageCircle className="size-4"/></a></div></div><div><h3 className="text-[9px] uppercase tracking-[.3em] text-gold">Explore</h3><nav className="mt-6 space-y-3 text-xs text-primary-foreground/65">{['Classes','Schedule','Pricing','Instructors','About Us','Studio Policy','Contact Us'].map(x=><a key={x} href={x==='Classes'?'#classes':'#top'} className="block hover:text-gold">{x}</a>)}</nav></div><div id="schedule"><h3 className="text-[9px] uppercase tracking-[.3em] text-gold">Hours & info</h3><div className="mt-6 space-y-6 text-xs"><p><strong>Mon – Fri</strong><span className="block text-primary-foreground/45">7:00 AM – 9:00 PM</span></p><p><strong>Sat – Sun</strong><span className="block text-primary-foreground/45">8:00 AM – 6:00 PM</span></p><p className="flex gap-3"><MapPin className="size-4 text-gold"/><span>Koramangala,<br/>Bengaluru 560095</span></p></div></div><div><h3 className="text-[9px] uppercase tracking-[.3em] text-gold">Find us</h3><div className="mt-6 flex h-36 items-center justify-center rounded-xl border border-gold/20 bg-primary-foreground/5 text-center text-xs text-primary-foreground/50"><MapPin className="mr-2 size-4 text-gold"/> Koramangala, Bengaluru</div></div></div><p className="pt-8 text-[10px] text-primary-foreground/35">© 2026 Rhythm Studio. All rights reserved.</p></div></footer>
  <a href="#footer" aria-label="Chat with us" className="fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full border-[5px] border-gold/50 bg-espresso text-primary-foreground shadow-2xl transition-transform hover:scale-105"><MessageCircle className="size-6"/></a></>;
}

function HomePage() {
  useEffect(() => { document.documentElement.style.scrollBehavior = "smooth"; }, []);
  return <main><Header/><Hero/><Vision/><Classes/><Archives/><Footer/></main>;
}