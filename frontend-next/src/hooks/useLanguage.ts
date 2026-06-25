// "use client";

// import { useState, useEffect } from "react";

// export default function useLanguage() {
//   const [lang, setLang] = useState("en");

//   useEffect(() => {
//     const saved = localStorage.getItem("lang");
//     if (saved) setLang(saved);
//   }, []);

//   const toggleLang = () => {
//     const newLang = lang === "en" ? "am" : "en";
//     setLang(newLang);
//     localStorage.setItem("lang", newLang);
//   };

//   return { lang, toggleLang };
// }
"use client";

import { useState, useEffect } from "react";
import type { Lang } from "../lib/lang";

export default function useLanguage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "am") {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const newLang: Lang = lang === "en" ? "am" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return { lang, toggleLang };
}
