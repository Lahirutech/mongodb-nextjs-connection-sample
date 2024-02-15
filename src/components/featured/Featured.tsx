import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import headrImg from "@public/assets/images/3d-cartoon-boy-character-model-design-free-photo.jpg";

const Featured = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.articleHead}>
        Main Heading of the Article Goes here
      </h1>
      <div className={styles.articleBody}>
        <div className={styles.articleDesc}>
          <h2 className={styles.subhead}>Sub heading of the article</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae temporibus voluptatum aut veniam error praesentium nihil
            sed illum eius magni, maiores quae. Repudiandae facilis veniam
            explicabo nobis hic fugit eaque?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
        <div className={styles.articleImage}>
          {" "}
          <Image alt="" src={headrImg} className={styles.image} fill />
        </div>
      </div>
    </div>
  );
};

export default Featured;
