"use client";
// import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import useLanguage from "../src/hooks/useLanguage";
import { translations } from "../src/lib/lang";

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  return (
    <header>
      <nav>
        <a href="">Stock Prediction Portal</a>

        <div className="seccolumn">
          <button onClick={toggleLang}>{translations[lang].toggle}</button>
          <ThemeToggle />
        </div>

        <div className="thicolumn">
          <a href="">
            <button>Login</button>
          </a>
          <a href="">
            <button>Register</button>
          </a>
        </div>
      </nav>
    </header>
  );
}
// {
//   /* <Link href="/posts">{translations[lang].posts}</Link> */
// }
