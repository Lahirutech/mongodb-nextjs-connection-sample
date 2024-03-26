import React from "react";
import styles from "./menu.module.css";
import categStyles from "../category/category.module.css";
import Link from "next/link";
import Image from "next/image";

import itemImage from "@public/assets/images/nature.jpg";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h3>What &aposs New</h3>
      <h2>Most Popular</h2>
      <div className={styles.itemList}>
        <Link href={""} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={itemImage} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${categStyles.technologybg}`}>
              Travel
            </span>
            <h3 className={styles.descreption}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              obcaecati quidem eligendi
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Lanka Rathnayaka</span>
              <span className={styles.date}>04.12.2024</span>
            </div>
          </div>
        </Link>

        <Link href={""} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={itemImage} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${categStyles.fashionbg}`}>
              Travel
            </span>
            <h3 className={styles.descreption}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              obcaecati quidem eligendi
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Lanka Rathnayaka</span>
              <span className={styles.date}>04.12.2024</span>
            </div>
          </div>
        </Link>

        <Link href={""} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={itemImage} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${categStyles.lifebg}`}>
              Travel
            </span>
            <h3 className={styles.descreption}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              obcaecati quidem eligendi
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Lanka Rathnayaka</span>
              <span className={styles.date}>04.12.2024</span>
            </div>
          </div>
        </Link>
        <Link href={""} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={itemImage} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${categStyles.articlebg}`}>
              Travel
            </span>
            <h3 className={styles.descreption}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              obcaecati quidem eligendi
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Lanka Rathnayaka</span>
              <span className={styles.date}>04.12.2024</span>
            </div>
          </div>
        </Link>
        <Link href={""} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={itemImage} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${categStyles.sciencebg}`}>
              Travel
            </span>
            <h3 className={styles.descreption}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              obcaecati quidem eligendi
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Lanka Rathnayaka</span>
              <span className={styles.date}>04.12.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
