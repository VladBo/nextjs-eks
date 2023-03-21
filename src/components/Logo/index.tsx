import Image from "next/image";
import styles from "../../app/page.module.css";

export default function Logo() {
  return (
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className={styles.vercelLogo}
      width={100}
      height={24}
      priority
    />
  );
}
