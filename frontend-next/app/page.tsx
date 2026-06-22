"use client";

import useLanguage from "../src/hooks/useLanguage";
import { translations } from "../src/lib/lang";
import Main from "@/component/Main";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <main>
      {/* <h1>{translations[lang].title}</h1> */}
      <Main />
    </main>
  );
}
