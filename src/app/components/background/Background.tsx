"use client";

import Image from "next/image";
import styles from "./Background.module.css";

/* The main background image for the app site */
const Background = () => {
  return (
    <div className={styles.backgroundImage}>
      <Image src="/background.svg" alt="Background" width={1000} height={1000} priority />
    </div>
  )
}

export default Background;