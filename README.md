# BATS MÉCANELEC – Site vitrine (Next.js + Tailwind)

## Démarrage en local
```bash
npm install
npm run dev
# puis ouvrir http://localhost:3000
```

## Déployer sur Vercel (conseillé)
1. Créez un repo Git (Github, GitLab…).
2. Poussez le code (`git init`, `git add .`, `git commit -m "init"`, `git remote add origin ...`, `git push`).
3. Allez sur vercel.com → **New Project** → Importez le repo.
4. Laissez les **Build Settings** par défaut (Next.js).
5. À la fin du déploiement, vous obtenez l’URL du site. Connectez votre **domaine** si besoin.

## Formulaire de contact
Le formulaire utilise Formspree (action HTML). Remplacez l’URL par la vôtre ou branchez votre backend si besoin.

## Personnalisation
- Modifiez votre logo dans `/public/logo.png`.
- Le composant principal est `components/BatsMecanelecLanding.jsx`.
