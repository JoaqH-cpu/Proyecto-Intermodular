import type { Metadata } from "next";
import { storeConfig } from "@clavapalos/commerce";
import Sidebar from "./components/Sidebar";

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
      <body>

        <div className="panel-layout">

          <Sidebar />

          <div className="panel-content">
            {children}
          </div>

        </div>

      </body>
    </html>
  );
}