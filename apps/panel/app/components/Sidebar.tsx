"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/orders", label: "Pedidos" },
    { href: "/products", label: "Productos" },
    { href: "/inventory", label: "Inventario" },
    { href: "/customers", label: "Clientes" },
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        Clava<span>Palos</span>
      </div>

      <nav aria-label="Navegación principal">

        {links.map((link) => {

          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "active" : ""}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );

        })}

      </nav>

    </aside>
  );
}