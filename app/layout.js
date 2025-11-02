import "./../styles/globals.css";

export const metadata = {
  title: "BATS MÉCANELEC – Machines à bois",
  description: "Vente & réparations de machines à bois – Centre, France",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
