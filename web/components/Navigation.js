import React from "react";
import styles from "./Navigation.css";

export default function Navigation({ items }) {
  return (
    <ul className={styles.container}>
      {items.map((item, i) => (
        <Submenu key={i} {...item} />
      ))}
    </ul>
  );
}

function Submenu({ href, title, items }) {
  return (
    <li>
      <a href={href} className={styles.menuItem}>
        {title}
      </a>
      {items && (
        <ol className={styles.submenu}>
          {items.map((item, i) => (
            <Submenu key={i} {...item} />
          ))}
        </ol>
      )}
    </li>
  );
}
