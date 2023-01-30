import React, { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <button className={styles.button} onClick={increment}>
      Counte: {counter}
    </button>
  );
};
