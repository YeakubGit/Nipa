import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rowshon Ara Sarker | Portfolio",
  description: "Official Portfolio of Rowshon Ara Sarker - Community Organizer, Activist, Film Director and Writer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}