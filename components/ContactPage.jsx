'use client';
import { useState } from 'react';

const MAPS_URL = 'https://maps.app.goo.gl/CFLjtYqCeJoj6Ksz9';
const FORMSPREE_ACTION = 'https://formspree.io/f/xbjwqpdl';

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'ok' | 'error' | null

  const WEB3FORMS_KEY = 3f20be25-d207-4eba-8ae7-92669c68d170; // ← ta clé ici

async function handleSubmit(e) {
  e.preventDefault();
  setSending(true);
  setStatus(null);

  const form = e.currentTarget;
  const formData = new FormData(form);

  // Champs obligatoires / utiles
  formData.append("access_key", WEB3FORMS_KEY);
  formData.append("to", "seb.bats@batsmecanelec.fr");          // destinataire
  formData.append("subject", "Nouveau message depuis batsmecanelec.fr");
  formData.append("from_name", "Site BATS Mécanélec");           // nom expéditeur affiché
  formData.append("replyto", formData.get("email") || "");       // Reply-To = email du client
  formData.append("botcheck", "");                               // honeypot (laisse vide)

  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await res.json();
    console.log("Web3Forms response:", data);

    if (data.success) {
      setStatus("ok");
      form.reset();
    } else {
      // Affiche l’erreur côté UI pour diagnostiquer
      setStatus("error");
      alert("Erreur Web3Forms: " + (data.message || "inconnue"));
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
  } finally {
    setSending(false);
  }
}
  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* fond identique accueil */}
      <div className="bg-parallax" style={{ backgroundImage: "url('/cn chatgpt.png')" }} aria-hidden />

      {/* top bar */}
      <div className="relative z-10 hidden md:block text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-end">
          <span>
            ☎️ <a className="underline" href="tel:+33687812666">+33 6 87 81 26 66</a> • ✉️{' '}
            <a className="underline" href="mailto:seb.bats@batsmecanelec.fr">seb.bats@batsmecanelec.fr</a>
          </span>
        </div>
      </div>

      {/* header */}
      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="BATS MÉCANELEC" className="w-32 h-32 object-contain" />
            <div>
              <p className="text-5xl md:text-6xl font-semibold italic text-logo-blue font-[DancingScript] leading-none">
                Bats Mécanélec
              </p>
              <p className="text-[11px] md:text-xs text-gray-100 mt-1">
                4 Lieu-dit Montluisson • 63780 SAINT-GEORGES-DE-MONS
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white">
            <a href="/" className="hover:opacity-90">Accueil</a>
            <a href="/realisations" className="hover:opacity-90">Réalisations</a>
            <a href="/contact" className="hover:opacity-90">Contact</a>
          </nav>
        </div>
      </header>

      {/* bloc contact */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="inline-block bg-logo-yellow-65 border-2 border-black rounded-[28px] px-4 py-2 text-3xl font-bold text-neutral-900">
            Contact
          </h1>
          <p className="mt-3 inline-block bg-logo-yellow-65 border-2 border-black rounded-[28px] px-4 py-2 text-neutral-900">
            Dites-nous votre besoin : type de machine, panne, marque, délai souhaité.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-8 text-neutral-900">
            {/* coordonnées + image maps cliquable */}
            <div className="rounded-2xl p-6 border-2 border-black bg-logo-yellow-65">
              <p className="font-medium text-black">Coordonnées</p>
              <p className="text-sm mt-2 text-black">
                Tél. <a className="underline text-logo-blue" href="tel:+33687812666">+33 6 87 81 26 66</a>
              </p>
              <p className="text-sm text-black">
                Email{' '}
                <a className="underline text-logo-blue" href="mailto:seb.bats@batsmecanelec.fr">
                  seb.bats@batsmecanelec.fr
                </a>
              </p>
              <p className="text-sm text-black">
                Adresse : 4 Lieu-dit Montluisson, 63780 SAINT-GEORGES-DE-MONS
              </p>

              {/* Image de carte cliquable */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-xl overflow-hidden border-2 border-black"
                title="Ouvrir dans Google Maps"
              >
                {/* Mets un aperçu statique dans /public/maps-preview.jpg */}
                <img
                  src="/maps-preview.jpg"
                  alt="Localisation BATS MÉCANELEC sur Google Maps"
                  className="w-full h-56 object-cover"
                />
              </a>

              {/* Bouton itinéraire (conserve si tu veux) */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block w-full text-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm"
              >
                Itinéraire Google Maps
              </a>
            </div>

            {/* formulaire connecté */}
            <form onSubmit={handleSubmit} className="rounded-2xl p-6 border-2 border-black bg-logo-yellow-65">
              <p className="font-medium text-black">Demande</p>
              <div className="mt-3 grid gap-3">
                <input className="px-3 py-2 rounded-lg bg-white text-black placeholder-neutral-500" name="name" placeholder="Nom / Entreprise" required />
                <input className="px-3 py-2 rounded-lg bg-white text-black" name="email" type="email" placeholder="Email" required />
                <input className="px-3 py-2 rounded-lg bg-white text-black" name="phone" placeholder="Téléphone" />
                <select name="service" className="px-3 py-2 rounded-lg bg-white text-black">
                  <option>Vente de machine</option>
                  <option>Réparation / Dépannage</option>
                  <option>Contrat de maintenance</option>
                  <option>Mise en conformité</option>
                </select>
                <textarea className="px-3 py-2 rounded-lg bg:white text-black min-h-[120px]" name="message" placeholder="Votre message (panne, modèle, délai)"></textarea>

                <button
                  type="submit"
                  disabled={sending}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm disabled:opacity-60"
                >
                  {sending ? 'Envoi…' : 'Envoyer'}
                </button>

                {status === 'ok' && (
                  <p className="text-sm text-green-700 bg-white/80 rounded-md px-3 py-2">
                    Merci, votre demande a été envoyée. Nous revenons vers vous rapidement.
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-sm text-red-700 bg-white/80 rounded-md px-3 py-2">
                    Désolé, l’envoi a échoué. Réessayez ou écrivez à{' '}
                    <a className="underline text-logo-blue" href="mailto:seb.bats@batsmecanelec.fr">
                      seb.bats@batsmecanelec.fr
                    </a>.
                  </p>
                )}
              </div>
              <p className="text-xs text-black/80 mt-3">
                En envoyant ce formulaire, vous acceptez que nous vous répondions par e-mail/téléphone.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} BATS MÉCANELEC
        </div>
      </footer>
    </div>
  );
}
