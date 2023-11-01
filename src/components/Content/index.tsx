import React from "react";
import style from "./styles.module.scss";
import joinClass from "@/utils/joinClass";

export default function Content() {
  return (
    <main className={style.mainStyle}>
      <section
        id="home"
        className={joinClass(style.commonStyles, style.first)}
      ></section>
      <section className={joinClass(style.commonStyles)}>sec</section>
      <section className={joinClass(style.commonStyles)}>sec</section>
      <section id="about" className={joinClass(style.commonStyles)}>
        sec
      </section>
      <section className={joinClass(style.commonStyles)}>sec</section>
    </main>
  );
}
