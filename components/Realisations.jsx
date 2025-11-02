'use client';
import { motion } from 'framer-motion';

const photos = [
  '/realisations/01.jpg',
  '/realisations/02.jpg',
  '/realisations/03.jpg',
  '/realisations/04.jpg',
  '/realisations/05.jpg',
  '/realisations/06.jpg',
];

export default function Realisations() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* Fond parallaxe + zoom */}
      <div className="bg-parallax" style={{ backgroundImage: "url('/cn chatgpt.png')" }} aria-hidden />

      {/* Top bar */}
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
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="BATS MÉCANELEC" className="w-32 h-32 object-contain" />
            <div>
              <p className="text-5xl md:text-6xl font-semibold italic text-logo-blue font-[DancingScript] leading-none text-soft-shadow-2">
                Bats Mécanélec
              </p>
              <p className="text-[11px] md:text-xs text-gray-200 mt-1 text-soft-shadow">
                4 Lieu-dit Montluisson • 63780 SAINT-GEORGES-DE-MONS
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
            <a href="/" className="hover:text-white">Accueil</a>
            <a href="/realisations" className="hover:text-white">Réalisations</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Titre */}
      <section className="relative z-10 py-14 bg-black/45 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-soft-shadow-2 inline-block bg-logo-yellow-50 px-2 rounded-md">
            Nos réalisations
          </h1>
          <p className="mt-2 text-gray-200">
            Installations, mises en service, dépannages et mises en conformité chez nos clients.
          </p>
        </div>
      </section>

      {/* Galerie */}
      <section className="relative z-10 py-12 bg-black/35 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-lg"
            >
              <img src={src} alt={`Réalisation ${i + 1}`} className="w-full h-56 object-cover" />
              <div className="p-4">
                <p className="font-medium">Projet {i + 1}</p>
                <p className="text-sm text-gray-300">Installation / réglages / formation opérateurs.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-10 bg-black/60 backdrop-blur-[2px] text-gray-300 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} BATS MÉCANELEC
        </div>
      </footer>
    </div>
  );
}

