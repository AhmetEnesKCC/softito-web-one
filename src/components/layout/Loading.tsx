import Image from "next/image";

import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-y-3">
      <Image
        src={"/logo.svg"}
        width={250}
        height={250}
        className={styles.loading}
        alt="company logo"
      />
      <div className=" text-mainPurple font-bold text-2xl">Yükleniyor...</div>
    </div>
  );
};

export default Loading;
