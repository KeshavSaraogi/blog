import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import P1 from '../../../public/p1.jpeg';

const Featured = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>
          <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
        </h1>
      </header>
      <article className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={P1} alt="Creative project illustration" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.button} aria-label="Read more about this post">Read More</button>
        </div>
      </article>
    </div>
  );
};

export default Featured;
