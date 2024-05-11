import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

import { MdMenu } from "react-icons/md";

import logo from "@/assets/react.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex-between-center py-4 sm:px-20 px-6">
      <Link to="/" className="flex-center gap-2">
        <img src={logo} className="w-10 h-auto" />
        <h1 className="text-lg font-semibold">Template App</h1>
      </Link>

      <nav className="relative">
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MdMenu className="sm:hidden text-2xl" />
        </button>

        {/* FIXME: dropdown menu and add animations */}
        <div
          className={classNames(
            "sm:hidden absolute top-full left-0 w-full h-full bg-white rounded-lg shadow-lg p-4 gap-4 flex flex-col items-center",
            {
              hidden: !isMenuOpen,
            }
          )}
        >
          {[
            { href: "/pricing", name: "Pricing" },
            { href: "/contact", name: "Contact" },
            { href: "/login", name: "Login" },
          ].map((link, i) => (
            <Link
              key={i}
              className="hover:text-secondary default-transition"
              to={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <ul className="sm:flex hidden items-center gap-6">
          {[
            { href: "/pricing", name: "Pricing" },
            { href: "/contact", name: "Contact" },
            { href: "/login", name: "Login" },
          ].map((link, i) => (
            <li key={i}>
              <Link
                className="hover:text-secondary default-transition"
                to={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
