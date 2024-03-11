"use client";
import React, { useState } from "react";
import styles from "./authswitch.module.css";
import Link from "next/link";

export default function AuthSwitch() {
  const [open, setOpen] = useState("");
  const [toggle, setToggle] = useState("");

  const menuClicked = () => {
    if (toggle == styles.toggle) {
      setToggle("");
    } else {
      setToggle(styles.toggle);
    }

    if (open == styles.open) {
      setOpen("");
    } else setOpen(styles.open);
  };
  return (
    <div className={styles.authSwitch}>
      {" "}
      <div
        className={`${styles.mobileMenueIcon} ${toggle}`}
        onClick={() => menuClicked()}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
      <div className={`${styles.mobileMenue} ${open}`}>
        <Link href="">Login</Link>
        <Link href="">Home</Link>
        <Link href="">Contact</Link>
        <Link href="">About</Link>
      </div>
    </div>
  );
}
