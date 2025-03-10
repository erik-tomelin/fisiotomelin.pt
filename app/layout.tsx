import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evandro Tomelin - Fisioterapeuta Especializado",
  description:
    "Redescubra sua qualidade de vida com Evandro Tomelin, fisioterapeuta especializado em Aveiro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
