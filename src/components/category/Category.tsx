import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import nature from "@public/assets/images/nature.jpg";
import Image from "next/image";

export const Category = () => {
  const categories = [
    { id: 1, name: "Articles", bg: "article" },
    { id: 1, name: "Fashion", bg: "fashion" },
    { id: 1, name: "Technology", bg: "technology" },
    { id: 1, name: "Science", bg: "science" },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        {categories.map((item, key) => (
          <Link
            href={""}
            className={`${styles.category} ${styles[item.bg]}`}
            key={key}
          >
            <Image
              src={nature}
              alt=""
              width={32}
              height={32}
              className={styles.caterImage}
            />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
