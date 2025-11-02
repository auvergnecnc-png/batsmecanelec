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
      className="min-h-screen bg-neutral-50 text-neutral-900 font-sans relative overflow-hidden"
      style={{
        backgroundImage: "url('/cn chatgpt.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.98
      }}
    >
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

      {/* Top contact bar */}
      <div className="hidden md:block bg-neutral-900 text-white text-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-end">
          <span>
            ☎️ <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a> • ✉️{' '}
            <a className="underline" href="mailto:contact@bats-mecanelec.fr">contact@bats-mecanelec.fr</a>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200 relative">
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
              className="w-28 h-28 rounded-xl bg-white object-contain p-1.5 shadow-sm border border-neutral-200"
            />
            <div>
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-5xl font-semibold italic text-blue-700 leading-none font-[DancingScript]"
              >
                Bats Mécanélec
              </motion.p>
              <p className="text-[11px] md:text-xs text-neutral-500 mt-1">
                4 Lieu-dit Montluisson<br />63780 SAINT-GEORGES-DE-MONS
              </p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#realisations" className="hover:text-neutral-600">Réalisations</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
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
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-neutral-900 drop-shadow-md">
              Vente & réparation <span className="text-neutral-700">de machines à bois</span> — Centre France
            </h1>
            <p className="mt-4 text-neutral-700 md:text-lg">
              Conseil, fourniture, installation, mise en conformité et maintenance pour ateliers,
              menuisiers et industriels.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm">
                Nous contacter
              </a>
              <a href="#services" className="px-4 py-2 rounded-xl border border-neutral-300 hover:border-neutral-400 text-sm bg-white/70 backdrop-blur">
                Voir nos services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-white/90 border-t border-neutral-200 relative z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Nos services</h2>
          <p className="mt-2 text-neutral-600">Des solutions complètes pour équiper et faire durer votre atelier.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white grid place-items-center">✓</div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-1 text-neutral-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-white/90 border-y border-neutral-200 relative z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-neutral-600">Dites-nous votre besoin : type de machine, panne, marque, délai souhaité.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50/80">
              <p className="font-medium">Coordonnées</p>
              <p className="text-sm text-neutral-600 mt-2">
                Tél. <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a>
              </p>
              <p className="text-sm text-neutral-600">
                Email <a className="underline" href="mailto:contact@bats-mecanelec.fr">contact@bats-mecanelec.fr</a>
              </p>
              <p className="text-sm text-neutral-600">Zone : Centre – France</p>
              <div className="mt-4 aspect-video rounded-xl bg-neutral-100 grid place-items-center text-neutral-500 text-sm">
                Carte / Google Maps
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50/80">
              <p className="font-medium">Horaires</p>
              <p className="text-sm text-neutral-600 mt-2">Lun–Ven : 8h00 – 18h00</p>
              <p className="text-sm text-neutral-600">Samedi : sur rendez-vous</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 relative z-10 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6 text-sm">
          <div className="md:col-span-2">
            <p className="font-semibold">BATS MÉCANELEC</p>
            <p className="text-neutral-600 mt-1">
              Vente & réparation de machines à bois. Conseil, installation, maintenance et pièces détachées.
            </p>
          </div>
          <div>
            <p className="font-semibold">Liens</p>
            <ul className="mt-2 text-neutral-600 space-y-1">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Légal</p>
            <ul className="mt-2 text-neutral-600 space-y-1">
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} BATS MÉCANELEC. Tous droits réservés.
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
