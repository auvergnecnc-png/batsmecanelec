'use client';
import { motion } from 'framer-motion';

export default function HomeLanding() {
  const features = [
    { title: 'Vente de machines à bois',
      desc: "Scies à format, raboteuses, toupies, combinées, aspiration — neuf et reconditionné, garanti et prêt à produire." },
    { title: 'Réparations & maintenance',
      desc: "Dépannage sur site, diagnostics élec./mécaniques, pièces d’origine, contrats de maintenance." },
    { title: 'Mise en service & conformité',
      desc: "Installation, réglages, formations sécurité, conformité CE, conseils aspiration & bruit." },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* Image de fond en parallaxe + zoom */}
      <div
        className="bg-parallax"
        style={{ backgroundImage: "url('/cn chatgpt.png')" }}
        aria-hidden
      />

      {/* Barre contact haute */}
      <div className="relative z-10 hidden md:block bg-neutral-900/75 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-end">
          <span>
            ☎️ <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a> • ✉️{' '}
            <a className="underline" href="mailto:seb.bats@batsmecanelec.fr">seb.bats@batsmecanelec.fr</a>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 sticky top-0 backdrop-blur bg-neutral-900/55 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}
            className="flex items-center gap-4"
          >
            {/* LOGO : plus gros, sans fond */}
            <img
              src="/logo.png"
              alt="BATS MÉCANELEC"
              className="w-48 h-48 object-contain" /* pas de bg ni bordure */
            />
            <div>
              <motion.p
                initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .2 }}
                className="text-5xl md:text-6xl font-semibold italic text-logo-blue font-[DancingScript] leading-none text-soft-shadow-2"
              >
                Bats Mécanélec
              </motion.p>
              <p className="text-[11px] md:text-xs text-gray-200 mt-1 text-soft-shadow">
                4 Lieu-dit Montluisson<br/>63780 SAINT-GEORGES-DE-MONS
              </p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="/realisations" className="hover:text-white">Réalisations</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-soft-shadow-2">
              <span className="text-logo-blue bg-logo-yellow-50 px-2 rounded-md">Vente & réparation</span>{' '}
              <span className="bg-logo-yellow-50 px-2 rounded-md text-white/95">de machines à bois</span>{' '}
              <span className="bg-logo-yellow-50 px-2 rounded-md text-white/95">— Centre France</span>
            </h1>

            <p className="mt-4 md:text-lg text-gray-100 text-soft-shadow bg-logo-yellow-50 inline-block px-2 rounded-md">
              Conseil, fourniture, installation, mise en conformité et maintenance pour ateliers, menuisiers et industriels.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm">Nous contacter</a>
              <a href="#services" className="px-4 py-2 rounded-xl border border-white/60 hover:bg-white/10 text-sm">Voir nos services</a>
            </div>

            <ul className="mt-6 text-sm text-gray-200 grid grid-cols-2 gap-y-2 text-soft-shadow">
              <li>• Intervention rapide</li>
              <li>• Pièces d’origine</li>
              <li>• Garantie atelier</li>
              <li>• Mise en conformité</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4 text-neutral-900">
  <h2 className="inline-block bg-logo-yellow-65 px-3 py-2 rounded-2xl border-2 border-logo-yellow text-2xl md:text-3xl font-bold">
    Nos services
  </h2>

  <p className="mt-3 inline-block bg-logo-yellow-65 px-3 py-2 rounded-2xl border border-logo-yellow text-[15px]">
    Des solutions complètes pour équiper et faire durer votre atelier.
  </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white/10 p-5 border border-white/20 shadow-lg hover:bg-white/20 transition">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white grid place-items-center">✓</div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-1 text-gray-200 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-10 bg-black/60 backdrop-blur-[2px] text-gray-300 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} BATS MÉCANELEC — Vente & Réparation de machines à bois
        </div>
      </footer>

      {/* Bouton mobile Appeler */}
      <a href="tel:+33687812666" className="fixed md:hidden bottom-4 right-4 px-4 py-3 rounded-full shadow-lg bg-blue-600 text-white text-sm z-20">
        Appeler
      </a>
    </div>
  );
}
