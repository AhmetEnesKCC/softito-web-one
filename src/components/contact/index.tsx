import React from "react";

import styles from "./styles.module.css";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

const Contact = () => {
  const contact_info = [
    {
      icon: <FaPhone />,
      label: "Telefon No",
      value: "0555 555 55 55",
    },
    {
      icon: <FaMailBulk />,
      label: "Mail",
      value: "coubes@mail.com",
    },
    {
      icon: <FaLocationArrow />,
      label: "Adres",
      value: "Uskudar / Istanbul",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Bizimle iletişime geçin</h2>
      {contact_info.map((c) => (
        <div className={styles.contact} key={c.value}>
          <div className={styles.icon}>{c.icon}</div>
          <div className={styles.label}>{c.label}</div>
          <div className={styles.value}>{c.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
