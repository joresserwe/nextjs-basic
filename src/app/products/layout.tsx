import styles from './layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <a href="">여성 옷</a>
        <a href="">남성 옷</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
