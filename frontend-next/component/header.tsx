"use client";
// import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import useLanguage from "../src/hooks/useLanguage";
import { translations } from "../src/lib/lang";
import Button from "./Button";

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
          <Button text="Login" class="Login" />
          <Button text="Register" class="Register" />
        </div>
      </nav>
    </header>
  );
}
// {
//   /* <Link href="/posts">{translations[lang].posts}</Link> */
// }
