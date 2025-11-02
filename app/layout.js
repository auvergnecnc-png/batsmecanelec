import { Dancing_Script } from 'next/font/google';
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['600'], variable: '--font-dancing' });

import "./../styles/globals.css";
export const metadata = {
  title: "BATS MÉCANELEC – Machines à bois",
  description: "Vente & réparation de machines à bois – Centre France",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={dancing.variable}>{children}</body>
    </html>
  );
}
