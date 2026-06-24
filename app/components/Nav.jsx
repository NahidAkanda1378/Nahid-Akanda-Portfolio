'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';

const links = ['About', 'Experience', 'Education', 'Skills', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].getBoundingClientRect().top <= 120) {
          setActive(links[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image
            src="/favicon.ico"
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className={styles.logoIcon}
          />
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l}>
              <button
                className={`${styles.link} ${active === l ? styles.activeLink : ''}`}
                onClick={() => scrollTo(l.toLowerCase())}
              >
                {l}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://linkedin.com/in/nahidakanda"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
