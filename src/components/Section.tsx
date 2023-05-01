import React from "react";
import styles from "../styles/Section.module.scss";

export default function Section({ color }: { color: string }) {
  return (
    <>
      <div className={styles.box}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam
          accusamus sit minima repellendus amet eveniet enim, rerum vitae. Id,
          tempora voluptate non sint harum placeat ea facilis deleniti eum.
        </p>
        <button className={styles[color]}>버튼</button>
      </div>
    </>
  );
}
