"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlinks() {
  const path = usePathname();
  const links = [
    { title: "Dashboard", href: "/" },
    { title: "Tickets", href: "/tickets" },
  ];

  return (
    <div className="flex gap-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${path === link.href ? "text-black" : ""}`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
