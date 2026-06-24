import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>Nahid Akanda</span>
        <p className={styles.text}>
          Nahid Akanda · Chicago, IL · MS Economics & Quantitative Analysis
        </p>
        <a
          href="https://linkedin.com/in/nahidakanda"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
