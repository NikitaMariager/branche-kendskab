import Link from "next/link";
import styles from "@component/styles/Home.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}

export default Nav;
