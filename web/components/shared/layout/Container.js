import React from "react";
import style from "./Container.css";

export default function Container(props) {
  return <div className={style.Container}>{props.children}</div>
}
