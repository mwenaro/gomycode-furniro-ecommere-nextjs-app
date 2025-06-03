import { NAV_ITEMS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-24">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            height={40}
            width={40}
            src="/logo.png"
            alt="Furniro Logo"
            className="h-10 w-auto"
          />

          <h1 className="text-2xl font-bold text-gray-800">Furniro</h1>
        </Link>

        <ul className="flex space-x-8 text-gray-700 font-medium">
          {
            NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-gray-900">
                  {item.label}
                </Link>
              </li>
            ))
          }
         
        </ul>
        <div className="flex space-x-4 text-gray-700 text-xl">
          <span>👤</span>
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </nav>
    </header>
  );
}
