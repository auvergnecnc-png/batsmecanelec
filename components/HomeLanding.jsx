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
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top contact bar */}
      <div className="hidden md:block bg-neutral-900 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <span>Zone d’intervention : Centre – France • Partenaire SCM Group</span>
          <span>
            ☎️ <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a> • ✉️{' '}
            <a className="underline" href="mailto:contact@bats-mecanelec.fr">contact@bats-mecanelec.fr</a>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="BATS MÉCANELEC"
              className="w-16 h-16 rounded-xl bg-white object-contain p-1.5 shadow-sm border border-neutral-200"
            />
            <div>
              <p className="text-2xl md:text-3xl font-semibold italic text-blue-700 leading-none">Bats Mécanélec</p>
              <p className="text-[11px] md:text-xs text-neutral-500 mt-1">
                4 Lieu-dit Montluisson<br />63780 SAINT-GEORGES-DE-MONS
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#realisations" className="hover:text-neutral-600">Réalisations</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
          <a href="#devis" className="ml-4 text-sm px-3.5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
            Devis gratuit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.06),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(0,0,0,0.06),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Vente & réparation <span className="text-neutral-600">de machines à bois</span> — Centre France
            </h1>
            <p className="mt-4 text-neutral-600 md:text-lg">
              Partenaire SCM Group : conseil, fourniture, installation, mise en conformité et maintenance pour ateliers,
              menuisiers et industriels.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm">
                Demander un devis
              </a>
              <a href="#services" className="px-4 py-2 rounded-xl border border-neutral-300 hover:border-neutral-400 text-sm">
                Voir les services
              </a>
            </div>
            <ul className="mt-6 text-sm text-neutral-500 grid grid-cols-2 gap-y-2">
              <li>• Intervention rapide</li>
              <li>• Pièces d’origine</li>
              <li>• Garantie atelier</li>
              <li>• Mise en conformité</li>
            </ul>
          </motion.div>

          {/* Devis rapide */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <form
              id="devis"
              action="https://formspree.io/f/xbjwqpdl"
              method="POST"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white shadow-xl border border-neutral-200 p-5 md:p-6"
            >
              <p className="font-semibold text-lg">Demande de devis rapide</p>
              <div className="mt-3 grid gap-3">
                <input className="px-3 py-2 rounded-lg border border-neutral-300 bg-white" name="name" placeholder="Nom / Entreprise" required />
                <input className="px-3 py-2 rounded-lg border border-neutral-300 bg-white" name="phone" placeholder="Téléphone" />
                <input className="px-3 py-2 rounded-lg border border-neutral-300 bg-white" name="email" placeholder="Email" type="email" required />
                <select name="service" className="px-3 py-2 rounded-lg border border-neutral-300 bg-white">
                  <option>Vente de machine</option>
                  <option>Réparation / Dépannage</option>
                  <option>Contrat de maintenance</option>
                  <option>Mise en conformité</option>
                </select>
                <textarea
                  className="px-3 py-2 rounded-lg border border-neutral-300 bg-white min-h-[110px]"
                  name="message"
                  placeholder="Modèle / marque / panne / délai"
                  required
                ></textarea>
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm">Envoyer</button>
                <p className="text-xs text-neutral-500">Réponse sous 24h ouvrées</p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Marques */}
      <section className="py-8 border-y border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4">Nous travaillons avec</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
            <div className="px-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50 text-center text-sm text-neutral-600">SCM Group</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Nos services</h2>
          <p className="mt-2 text-neutral-600">Des solutions complètes pour équiper et faire durer votre atelier.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white grid place-items-center">✓</div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-1 text-neutral-600 text-sm">{f.desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm text-neutral-900 underline underline-offset-4">Demander un devis</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-16 md:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Réalisations</h2>
          <p className="mt-2 text-neutral-600">Quelques exemples d’installations et dépannages récents.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50">
                <div className="aspect-video bg-neutral-100 grid place-items-center text-neutral-500 text-sm">Photo projet {i}</div>
                <div className="p-4">
                  <p className="font-medium">Installation scie à format</p>
                  <p className="text-sm text-neutral-600">Mise à niveau, réglages, formation opérateurs.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-neutral-600">Dites-nous votre besoin : type de machine, panne, marque, délai souhaité.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form
              action="https://formspree.io/f/xbjwqpdl"
              method="POST"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50"
            >
              <div className="grid gap-3">
                <input className="px-3 py-2 rounded-lg border border-neutral-300 bg-white" name="name" placeholder="Nom / Entreprise" required />
                <input className="px-3 py-2 rounded-lg border border-neutral-300 bg-white" name="email" placeholder="Email" type="email" required />
                <input className="px-3 py-2 rounded-lg border border-neutral-300 bg-white" name="phone" placeholder="Téléphone" />
                <textarea
                  className="px-3 py-2 rounded-lg border border-neutral-300 bg-white min-h-[120px]"
                  name="message"
                  placeholder="Votre message (panne, modèle, service souhaité)"
                  required
                ></textarea>
                <button type="submit" className="mt-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm">
                  Envoyer la demande
                </button>
              </div>
              <p className="text-xs text-neutral-500 mt-3">En cliquant, vous acceptez notre politique de confidentialité.</p>
            </form>

            <div className="grid gap-4 content-start">
              <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
                <p className="font-medium">Coordonnées</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Tél. <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a>
                </p>
                <p className="text-sm text-neutral-600">
                  Email <a className="underline" href="mailto:contact@bats-mecanelec.fr">contact@bats-mecanelec.fr</a>
                </p>
                <p className="text-sm text-neutral-600">Zone d’intervention : Centre – France</p>
                <div className="mt-4 aspect-video rounded-xl bg-neutral-100 grid place-items-center text-neutral-500 text-sm">
                  Carte / Google Maps
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
                <p className="font-medium">Horaires</p>
                <p className="text-sm text-neutral-600 mt-2">Lun–Ven : 8h00 – 18h00</p>
                <p className="text-sm text-neutral-600">Samedi : sur rendez-vous</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
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
              <li><a href="#realisations" className="hover:underline">Réalisations</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Légal</p>
            <ul className="mt-2 text-neutral-600 space-y-1">
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>CGV</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} BATS MÉCANELEC. Tous droits réservés.
        </div>
      </footer>

      {/* Floating call button (mobile) */}
      <a
        href="tel:+33687812666"
        className="fixed md:hidden bottom-4 right-4 px-4 py-3 rounded-full shadow-lg bg-blue-600 text-white text-sm"
      >
        Appeler
      </a>
    </div>
  );
}
