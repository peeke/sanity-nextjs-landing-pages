import React from "react";
import Link from "next/link";
import styles from "./Navigation.css";

export default function Navigation({ items }) {
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/">
          <a className={styles.menuItem}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/recipe/category">
          <a className={styles.menuItem}>Categories</a>
        </Link>
      </li>
      {items.map((item, i) => (
        <Submenu key={i} {...item} />
      ))}
    </ul>
  );
}

function Submenu({ href, as, title, items }) {
  return (
    <li>
      <Link href={href} as={as}>
        <a className={styles.menuItem}>{title}</a>
      </Link>
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
