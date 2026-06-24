'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
          <span className={styles.label}>Contact</span>
          <h2 className={styles.heading}>
            Let's Work<br />
            <span className={styles.headingAccent}>Together</span>
          </h2>
          <p className={styles.sub}>
            I'm actively seeking Analyst and Coordinator roles in Chicago and beyond. If you're looking for someone who brings both quantitative rigor and operational clarity to your team — let's talk.
          </p>

          <div className={styles.links}>
            <a
              href="https://linkedin.com/in/nahidakanda"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <div className={styles.linkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4z"/>
                </svg>
              </div>
              <div>
                <p className={styles.linkTitle}>LinkedIn</p>
                <p className={styles.linkSub}>linkedin.com/in/nahidakanda</p>
              </div>
              <span className={styles.arrow}>→</span>
            </a>

            <a
              href="mailto:nahidpcc@gmail.com"
              className={styles.linkCard}
            >
              <div className={styles.linkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 5L2 7"/>
                </svg>
              </div>
              <div>
                <p className={styles.linkTitle}>Email</p>
                <p className={styles.linkSub}>nahidpcc@gmail.com</p>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          </div>

          <div className={styles.badges}>
            <span className={styles.badge}>📍 Chicago, IL</span>
            <span className={styles.badge}>🎓 DePaul University</span>
            <span className={styles.badge}>✅ Open to Work</span>
          </div>
        </div>

        <div className={`${styles.visual} ${visible ? styles.visible : ''}`}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.dot} style={{ background: '#ff5f57' }} />
              <div className={styles.dot} style={{ background: '#febc2e' }} />
              <div className={styles.dot} style={{ background: '#28c840' }} />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.codeLine}><span className={styles.codeKey}>role</span>: <span className={styles.codeVal}>"Data / Business Analyst"</span></p>
              <p className={styles.codeLine}><span className={styles.codeKey}>location</span>: <span className={styles.codeVal}>"Chicago, IL"</span></p>
              <p className={styles.codeLine}><span className={styles.codeKey}>education</span>: <span className={styles.codeVal}>"MS Economics"</span></p>
              <p className={styles.codeLine}><span className={styles.codeKey}>gpa</span>: <span className={styles.codeNum}>3.78</span></p>
              <p className={styles.codeLine}><span className={styles.codeKey}>tools</span>: <span className={styles.codeArr}>["Stata", "R", "Python", "Excel"]</span></p>
              <p className={styles.codeLine}><span className={styles.codeKey}>methods</span>: <span className={styles.codeArr}>["Regression", "Causal Inference", "Time Series"]</span></p>
              <p className={styles.codeLine}><span className={styles.codeKey}>open_to_work</span>: <span className={styles.codeBool}>true</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
