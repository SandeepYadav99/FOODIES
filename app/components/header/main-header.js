import React from "react";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./headerBackground/main-header-background";
import NavLink from "./nav-link/nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
