import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import nature from "@public/assets/images/nature.jpg";
import Image from "next/image";

export const Category = () => {
  const categories = [{ id: 1, name: "Articles", bg: "article" }];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <Link href={""} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src={nature}
            alt=""
            width={32}
            height={32}
            className={styles.caterImage}
          />
          Articls
        </Link>
        <Link href={""} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src={nature}
            alt=""
            width={32}
            height={32}
            className={styles.caterImage}
          />
          Articles
        </Link>
        <Link href={""} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src={nature}
            alt=""
            width={32}
            height={32}
            className={styles.caterImage}
          />
          Articls
        </Link>
        <Link href={""} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src={nature}
            alt=""
            width={32}
            height={32}
            className={styles.caterImage}
          />
          Articls
        </Link>
        <Link href={""} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src={nature}
            alt=""
            width={32}
            height={32}
            className={styles.caterImage}
          />
          Articls
        </Link>
      </div>
    </div>
  );
};
