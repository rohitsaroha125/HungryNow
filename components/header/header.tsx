import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import HeaderBackground from "./headerBackground";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/">
          <Image
            src={"/next.svg"}
            width={60}
            height={60}
            alt="Hungry Now Logo"
            priority
          />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
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
}
