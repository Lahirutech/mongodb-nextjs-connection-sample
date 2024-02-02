import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthSwitch from "../authSwitch/AuthSwitch";
import { ThemeToggle } from "../themeToggle/ThemeToggle";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Aussie <span className={styles.go}>Go</span>
      </div>
      <div className={styles.links}>
        <Link href="" className={styles.link}>
          Home{" "}
        </Link>
        <Link href="" className={styles.link}>
          Contact
        </Link>
        <Link href="" className={styles.link}>
          About
        </Link>
        <ThemeToggle/>
        <AuthSwitch />
      </div>
    </div>
  );
}
