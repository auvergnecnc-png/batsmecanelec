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
      {/* Fond parallaxe + zoom (aucun voile) */}
      <div
        className="bg-parallax"
        style={{ backgroundImage: "url('/cn chatgpt.png')" }}
        aria-hidden
      />

      {/* Barre contact haute */}
      <div className="relative z-10 hidden md:block text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-end drop-shadow-[0_1px_4px_rgba(0,0,0,.8)]">
          <span>
            ☎️ <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a> • ✉️{' '}
            <a className="underline" href="mailto:seb.bats@batsmecanelec.fr">seb.bats@batsmecanelec.fr</a>
          </span>
        </div>
      </div>

      {/* Header SANS fond gris (juste un léger blur pour la lisibilité) */}
      <header className="relative z-10 sticky top-0 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}
            className="flex items-center gap-4"
          >
            {/* Logo plus gros, sans fond */}
            <img
              src="/logo.png"
              alt="BATS MÉCANELEC"
              className="w-36 h-36 object-contain"
            />
            <div>
              <motion.p
                initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .2 }}
                className="text-5xl md:text-6xl font-semibold italic text-logo-blue font-[DancingScript] leading-none drop-shadow-[1px_1px_3px_rgba(0,0,0,.85)]"
              >
                Bats Mécanélec
              </motion.p>
              <p className="text-[11px] md:text-xs text-gray-100 mt-1 drop-shadow-[1px_1px_2px_rgba(0,0,0,.8)]">
                4 Lieu-dit Montluisson<br/>63780 SAINT-GEORGES-DE-MONS
              </p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white drop-shadow-[0_1px_4px_rgba(0,0,0,.8)]">
            <a href="#services" className="hover:opacity-90">Services</a>
            <a href="/realisations" className="hover:opacity-90">Réalisations</a>
            <a href="/contact" className="hover:opacity-90">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO — textes bleus + cartouches jaunes */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-[2px_2px_6px_rgba(0,0,0,.8)]">
              <span className="text-logo-blue bg-logo-yellow-65 px-2 rounded-xl">Vente & réparation</span>{' '}
              <span className="bg-logo-yellow-65 px-2 rounded-xl text-white/95">de machines à bois</span>{' '}
              <span className="bg-logo-yellow-65 px-2 rounded-xl text-white/95">— Centre France</span>
            </h1>

            <p className="mt-4 md:text-lg text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,.8)] bg-logo-yellow-65 inline-block px-2 rounded-xl">
              Conseil, fourniture, installation, mise en conformité et maintenance pour ateliers, menuisiers et industriels.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm">Nous contacter</a>
              <a href="#services" className="px-4 py-2 rounded-xl border border-white/70 hover:bg-white/10 text-sm">Voir nos services</a>
            </div>

            <ul className="mt-6 text-sm text-white grid grid-cols-2 gap-y-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,.8)]">
              <li>• Intervention rapide</li>
              <li>• Pièces d’origine</li>
              <li>• Garantie atelier</li>
              <li>• Mise en conformité</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SERVICES — pas de voile, encadrements jaunes */}
      <section id="services" className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4 text-neutral-900">
          {/* Titre + paragraphe encadrés en jaune */}
          <h2 className="inline-block bg-logo-yellow-65 px-3 py-2 rounded-2xl border-2 border-logo-yellow text-2xl md:text-3xl font-bold">
            Nos services
          </h2>
          <p className="mt-3 inline-block bg-logo-yellow-65 px-3 py-2 rounded-2xl border border-logo-yellow text-[15px]">
            Des solutions complètes pour équiper et faire durer votre atelier.
          </p>

          {/* Cartes */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-5 border-2 border-logo-yellow bg-logo-yellow-65 shadow-lg hover:shadow-xl transition text-neutral-900"
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

      {/* FOOTER minimal (sans voile) */}
      <footer className="py-10 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm drop-shadow-[0_1px_4px_rgba(0,0,0,.8)]">
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
