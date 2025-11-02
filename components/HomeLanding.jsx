'use client';
import { motion } from 'framer-motion';

export default function HomeLanding() {
  const features = [
    {
      title: 'Vente de machines à bois',
      desc: "Scies à format, raboteuses, toupies, combinées, aspiration — neuf et reconditionné, garanti et prêt à produire."
    },
    {
      title: 'Réparations & maintenance',
      desc: "Dépannage sur site, diagnostics élec./mécaniques, pièces d’origine, contrats de maintenance."
    },
    {
      title: 'Mise en service & conformité',
      desc: "Installation, réglages, formations sécurité, conformité CE, conseils aspiration & bruit."
    },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* Fond parallaxe + zoom */}
      <div className="bg-parallax" style={{ backgroundImage: "url('/cn chatgpt.png')" }} aria-hidden />

      {/* barre contact haute */}
      <div className="relative z-10 hidden md:block text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-end">
          <span>
            ☎️ <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a> • ✉️{' '}
            <a className="underline" href="mailto:seb.bats@batsmecanelec.fr">seb.bats@batsmecanelec.fr</a>
          </span>
        </div>
      </div>

      {/* Header — pas de blur */}
      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo plus gros, SANS fond */}
            <img src="/logo.png" alt="BATS MÉCANELEC" className="w-60 h-60 object-contain" />
            <div>
              <p className="text-5xl md:text-6xl font-semibold italic text-logo-blue font-[DancingScript] leading-none">
                Bats Mécanélec
              </p>
             
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white">
            <a href="#services" className="hover:opacity-90">Services</a>
            <a href="/realisations" className="hover:opacity-90">Réalisations</a>
            <a href="/contact" className="hover:opacity-90">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO : bloc texte dans un CADRE NOIR + fond jaune / logo SCM à droite */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">
          {/* CADRE JAUNE entourant tout le texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}
            className="bg-logo-yellow-65 border-2 border-black rounded-[32px] p-5 md:p-7 text-neutral-900"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-logo-blue">Vente & réparation</span><br/>
              <span className="text-logo-blue">de machines à bois —</span><br/>
              
            </h1>

            <p className="mt-3 md:text-lg">
              Conseil, fourniture, installation, mise en conformité et maintenance pour ateliers
              menuiseries,agenceurs et industriels.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/contact" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm text-white">
                Nous contacter
              </a>
              <a href="#services" className="px-4 py-2 rounded-xl border border-black text-sm">
                Voir nos services
              </a>
            </div>

            <ul className="mt-5 text-sm grid grid-cols-2 gap-y-1">
              <li>• Intervention rapide</li>
              <li>• Pièces d’origine</li>
              <li>• Garantie atelier</li>
              <li>• Mise en conformité</li>
            </ul>
          </motion.div>

          {/* LOGO SCM à droite */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/scm.png"
              alt="SCM Group"
              className="w-[520px] max-w-full h-auto object-contain bg-white/80 rounded-2xl p-4 border-2 border-black"
            />
          </div>
        </div>
      </section>

      {/* SERVICES — encadrement jaune pour le titre + paragraphe, et cartes jaunes encadrées noir */}
      <section id="services" className="relative z-10 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-neutral-900">
          {/* Titre encadré JAUNE + NOIR */}
          <div className="inline-block bg-logo-yellow-65 border-2 border-black rounded-[28px] px-4 py-2">
            <h2 className="text-2xl md:text-3xl font-bold m-0">Nos services</h2>
          </div>

          {/* Paragraphe encadré */}
          <div className="mt-3 inline-block bg-logo-yellow-65 border-2 border-black rounded-[28px] px-4 py-2">
            <p className="text-[15px] m-0">Des solutions complètes pour équiper et faire durer votre atelier.</p>
          </div>

          {/* Cartes services */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-5 border-2 border-black bg-logo-yellow-65 shadow-lg hover:shadow-xl transition text-neutral-900"
              >
                <div className="w-10 h-10 rounded-lg grid place-items-center text-white"
                     style={{ backgroundColor: 'var(--logo-blue, #1e40ff)' }}>✓</div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-1 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} BATS MÉCANELEC — Vente & Réparation de machines à bois
        </div>
      </footer>

      {/* Bouton mobile Appeler */}
      <a
        href="tel:+33687812666"
        className="fixed md:hidden bottom-4 right-4 px-4 py-3 rounded-full shadow-lg bg-blue-600 text-white text-sm z-20"
      >
        Appeler
      </a>
    </div>
  );
}
