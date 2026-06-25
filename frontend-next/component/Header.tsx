"use client";

import ThemeToggle from "./ThemeToggle";
import useLanguage from "../src/hooks/useLanguage";
import { translations } from "@/src/lib/lang";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/app/AuthProvider";

export default function Header() {
  const router = useRouter();
  const { lang, toggleLang } = useLanguage();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    router.push("/login");
  };

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
          {isLoggedIn ? (
            <>
              <Button
                text="Dashboard"
                className="dash"
                onClick={() => router.push("/dashboard")}
              ></Button>
              <Button
                text="Logout"
                className="Logout"
                onClick={handleLogout}
              ></Button>
            </>
          ) : (
            <>
              <Button
                text="Login"
                className="Login"
                onClick={() => router.push("/login")}
              />

              <Button
                text="Register"
                className="Register"
                onClick={() => router.push("/register")}
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
