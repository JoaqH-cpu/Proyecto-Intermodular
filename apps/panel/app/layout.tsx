import type { Metadata } from "next";
import { storeConfig } from "@clavapalos/commerce";
import "../../../config/theme.css";
import "./globals.css";

export const metadata: Metadata = {
  title: `Panel · ${storeConfig.name}`,
  description: `Panel de gestión de ${storeConfig.legalName}`,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
