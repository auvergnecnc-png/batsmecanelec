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
    <div
      className="min-h-screen text-white font-sans relative overflow-hidden"
      style={{
        backgroundImage: "url('/cn chatgpt.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Top contact bar */}
      <div className="hidden md:block bg-neutral-900/80 text-white text-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-end">
          <span>
            ☎️ <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a> • ✉️{' '}
            <a className="underline" href="mailto:seb.bats@batsmecanelec.fr">seb.bats@batsmecanelec.fr</a>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-900/60 border-b border-neutral-700 relative">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <img
              src="/logo.png"
              alt="BATS MÉCANELEC"
              className="w-28 h-28 rounded-xl bg-white object-contain p-1.5 shadow-sm"
            />
            <div>
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-5xl font-semibold italic text-blue-400 leading-none font-[DancingScript] drop-shadow-[1px_1px_3px_rgba(0,0,0,0.9)]"
              >
                Bats Mécanélec
              </motion.p>
              <p className="text-[11px] md:text-xs text-gray-300 mt-1 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
                4 Lieu-dit Montluisson<br />63780 SAINT-GEORGES-DE-MONS
              </p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#realisations" className="hover:text-white">Réalisations</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
              Vente & réparation <span className="text-blue-300">de machines à bois</span> — Centre France
            </h1>
            <p className="mt-4 text-gray-100 md:text-lg drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)]">
              Conseil, fourniture, installation, mise en conformité et maintenance pour ateliers,
              menuisiers et industriels.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm text-white">
                Nous contacter
              </a>
              <a href="#services" className="px-4 py-2 rounded-xl border border-white/60 hover:bg-white/10 text-sm">
                Voir nos services
              </a>
            </div>
            <ul className="mt-6 text-sm text-gray-200 grid grid-cols-2 gap-y-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
              <li>• Intervention rapide</li>
              <li>• Pièces d’origine</li>
              <li>• Garantie atelier</li>
              <li>• Mise en conformité</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 backdrop-blur-[2px] bg-black/40 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">Nos services</h2>
          <p className="mt-2 text-gray-200">Des solutions complètes pour équiper et faire durer votre atelier.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white/10 p-5 shadow-lg hover:bg-white/20 transition border border-white/20"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white grid place-items-center">✓</div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-1 text-gray-200 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 backdrop-blur-[2px] bg-black/50 border-t border-white/10 relative z-10 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">Contact</h2>
          <p className="mt-2 text-gray-200">Dites-nous votre besoin : type de machine, panne, marque, délai souhaité.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white/10 p-6 border border-white/20 shadow-md">
              <p className="font-medium">Coordonnées</p>
              <p className="text-sm text-gray-200 mt-2">
                Tél. <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a>
              </p>
              <p className="text-sm text-gray-200">
                Email <a className="underline" href="mailto:seb.bats@batsmecanelec.fr">seb.bats@batsmecanelec.fr</a>
              </p>
              <p className="text-sm text-gray-200">Zone : Centre – France</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 border border-white/20 shadow-md">
              <p className="font-medium">Horaires</p>
              <p className="text-sm text-gray-200 mt-2">Lun–Ven : 8h00 – 18h00</p>
              <p className="text-sm text-gray-200">Samedi : sur rendez-vous</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black/60 backdrop-blur-[2px] text-gray-300 border-t border-white/10">
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
