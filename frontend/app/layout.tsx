import "./globals.css";

export const metadata = {
  title: "Neevza | Construction intelligence",
  description: "Find the construction projects most likely to need what you sell.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
