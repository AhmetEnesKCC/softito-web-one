import React, { ReactNode, useCallback } from "react";

import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

import { FaSignInAlt } from "react-icons/fa";

type LinkType = {
  to: string;
  label: string;
  type: "route" | "external";
};

type LinksType = LinkType[];

const Header = () => {
  const links: LinksType = [
    {
      label: "anasayfa",
      to: "/",
      type: "route",
    },
    {
      label: "eğitimler",
      to: "https://www.softito.com.tr/",
      type: "external",
    },
    {
      label: "iletişim",
      to: "/contact",
      type: "route",
    },
    {
      label: "biz kimiz",
      to: "/aboutus",
      type: "route",
    },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.right}>
        {links.map((link) => (
          <HeaderLink key={link.label} link={link} />
        ))}
        <div className={styles.buttons}>
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <button className={styles.login}>
      Login <FaSignInAlt />
    </button>
  );
};

const Signup = () => {
  return <button className={styles.signup}>Signup</button>;
};

const Logo = () => {
  return <Image src={"/logo-text.svg"} alt="logo" width={100} height={60} />;
};

const HeaderLink: React.FC<{ link: LinkType }> = ({ link }) => {
  const Wrapper = useCallback(
    (children: ReactNode) => {
      if (link.type === "external") {
        return (
          <a target="_blank" href={link.to}>
            {children}
          </a>
        );
      }
      return <Link href={link.to}>{children}</Link>;
    },
    [link]
  );

  return Wrapper(<div className={styles.link}>{link.label}</div>);
};

export default Header;
