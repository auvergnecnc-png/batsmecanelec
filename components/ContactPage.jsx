'use client';
import { motion } from 'framer-motion';

export default function ContactPage() {
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

      {/* Bloc contact */}
      <section className="relative z-10 py-16 bg-black/45 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-soft-shadow-2 inline-block bg-logo-yellow-50 px-2 rounded-md">
            Contact
          </h1>
          <p className="mt-2 text-gray-200">Dites-nous votre besoin : type de machine, panne, marque, délai souhaité.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {/* Coordonnées */}
            <div className="rounded-2xl bg-white/10 p-6 border border-white/20 shadow-md">
              <p className="font-medium">Coordonnées</p>
              <p className="text-sm text-gray-200 mt-2">
                Tél. <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a>
              </p>
              <p className="text-sm text-gray-200">
                Email <a className="underline" href="mailto:seb.bats@batsmecanelec.fr">seb.bats@batsmecanelec.fr</a>
              </p>
              <p className="text-sm text-gray-200">Adresse : 4 Lieu-dit Montluisson, 63780 SAINT-GEORGES-DE-MONS</p>
              <div className="mt-4 aspect-video rounded-xl bg-white/10 grid place-items-center text-gray-200 text-sm border border-white/20">
                Carte / Google Maps
              </div>
            </div>

            {/* Formulaire */}
            <motion.form
              action="https://formspree.io/f/xbjwqpdl" method="POST" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: .6 }}
              className="rounded-2xl bg-white/10 p-6 border border-white/20 shadow-md"
            >
              <p className="font-medium">Demande</p>
              <div className="mt-3 grid gap-3">
                <input className="px-3 py-2 rounded-lg bg-white/90 text-black placeholder-neutral-500" name="name" placeholder="Nom / Entreprise" required />
                <input className="px-3 py-2 rounded-lg bg-white/90 text-black" name="email" type="email" placeholder="Email" required />
                <input className="px-3 py-2 rounded-lg bg-white/90 text-black" name="phone" placeholder="Téléphone" />
                <select name="service" className="px-3 py-2 rounded-lg bg-white/90 text-black">
                  <option>Vente de machine</option>
                  <option>Réparation / Dépannage</option>
                  <option>Contrat de maintenance</option>
                  <option>Mise en conformité</option>
                </select>
                <textarea className="px-3 py-2 rounded-lg bg-white/90 text-black min-h-[120px]" name="message" placeholder="Votre message (panne, modèle, délai)"></textarea>
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm">
                  Envoyer
                </button>
              </div>
              <p className="text-xs text-gray-200 mt-2">Réponse rapide (jours ouvrés).</p>
            </motion.form>
          </div>
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
