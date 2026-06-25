"use client";

import Button from "./Button";
import styles from "./main.module.scss";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Stock Prediction Portal</h1>

        <p>AI-powered stock market analysis and prediction platform.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.....</p>

        <Button text="Explore Now " onClick={() => router.push("/dashboard")} />
      </div>
    </div>
  );
}
