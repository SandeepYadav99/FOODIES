import React from "react";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./headerBackground/main-header-background";

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground/>
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="A plate with food on it" />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default MainHeader;
