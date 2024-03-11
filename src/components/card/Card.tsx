import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import myImage from "@public/assets/images/nature.jpg";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={myImage} alt="" fill />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.details}>
          <span className={styles.date}>1/03/2024</span> -{" "}
          <span className="">Science</span>{" "}
        </div>
        <div className={styles.header}>
          <h1>Blog Post Header</h1>
        </div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit
          incidunt dolor hic odio officiis ea saepe rem deleniti illo eveniet
          illum harum consequatur, magnam sequi ut voluptates ad dolorem?
        </div>
        <Link href="" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
