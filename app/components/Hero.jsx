'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Hero.module.css';

// Animated data line — the signature element
function DataLine() {
  const pathRef = useRef(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const l = pathRef.current.getTotalLength();
      setLength(l);
    }
  }, []);

  const points = "M0,80 L60,72 L120,60 L180,65 L240,48 L300,52 L360,35 L420,40 L480,22 L540,28 L600,12 L660,18 L720,8";
  const dots = [[360,35],[480,22],[720,8]];

  return (
    <svg className={styles.dataLine} viewBox="0 0 720 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A9B8E" stopOpacity="0" />
          <stop offset="30%" stopColor="#4A9B8E" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4A843" stopOpacity="1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Grid lines */}
      {[20, 40, 60, 80].map(y => (
        <line key={y} x1="0" y1={y} x2="720" y2={y}
          stroke="rgba(212,168,67,0.07)" strokeWidth="1" strokeDasharray="4 6" />
      ))}

      {/* Main line */}
      <path
        ref={pathRef}
        d={points}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2"
        filter="url(#glow)"
        style={length ? {
          strokeDasharray: length,
          strokeDashoffset: length,
          animation: 'drawLine 2.4s cubic-bezier(0.4,0,0.2,1) 0.6s forwards'
        } : { opacity: 0 }}
      />

      {/* Dots at peaks */}
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="var(--amber)"
          style={{ opacity: 0, animation: `fadeIn 0.4s ease ${1.8 + i * 0.2}s forwards` }}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.bgGrad} />
        <DataLine />
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          <div className={`${styles.eyebrow} ${visible ? styles.visible : ''}`}>
            <span className={styles.dot} />
            Chicago, IL · Open to Opportunities
          </div>

          <h1 className={`${styles.name} ${visible ? styles.visible : ''}`}>
            Nahid<br />
            <span className={styles.nameAccent}>Akanda</span>
          </h1>

          <p className={`${styles.title} ${visible ? styles.visible : ''}`}>
            MS Economics &amp; Quantitative Analysis
          </p>

          <p className={`${styles.sub} ${visible ? styles.visible : ''}`}>
            Turning data into decisions — through econometrics,<br className={styles.br} />
            causal inference, and analytical rigor.
          </p>

          <div className={`${styles.actions} ${visible ? styles.visible : ''}`}>
            <button className={styles.primary} onClick={scrollDown}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="https://linkedin.com/in/nahidakanda" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              LinkedIn Profile →
            </a>
          </div>

          <div className={`${styles.stats} ${visible ? styles.visible : ''}`}>
            <div className={styles.stat}>
              <span className={styles.statNum}>3.78</span>
              <span className={styles.statLabel}>GPA at DePaul</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3+</span>
              <span className={styles.statLabel}>Years Industry Exp.</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>120+</span>
              <span className={styles.statLabel}>Research Records</span>
            </div>
          </div>
        </div>

        <div className={`${styles.portraitWrap} ${visible ? styles.visible : ''}`}>
          <div className={styles.portraitFrame}>
            <Image
              src="/img/nahid.png"
              alt="Portrait of Nahid Akanda"
              width={395}
              height={400}
              priority
              className={styles.portrait}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
