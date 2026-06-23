"use client";

import ThemeToggle from "./ThemeToggle";
import useLanguage from "../src/hooks/useLanguage";
import { translations } from "../src/lib/lang";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const { lang, toggleLang } = useLanguage();

  return (
    <header>
      <nav>
        {/* LOGO → HOME */}
        <Link href="/" className="logo">
          Stock Prediction Portal
        </Link>

        <div className="seccolumn">
          <button onClick={toggleLang}>{translations[lang].toggle}</button>

          <ThemeToggle />
        </div>

        <div className="thicolumn">
          <Button
            text="Login"
            class="Login"
            onClick={() => router.push("/login")}
          />

          <Button
            text="Register"
            class="Register"
            onClick={() => router.push("/register")}
          />
        </div>
      </nav>
    </header>
  );
}
