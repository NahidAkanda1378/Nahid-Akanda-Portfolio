'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const tools = ['Stata', 'R', 'Python', 'Excel', 'SQL', 'Tableau', 'Machine Learning', 'Econometrics'];

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.left} ${visible ? styles.visible : ''}`}>
          <span className={styles.label}>About</span>
          <h2 className={styles.heading}>
            Data-driven analyst with a foundation in economic theory
          </h2>
          <div className={styles.accent} />
        </div>

        <div className={`${styles.right} ${visible ? styles.visible : ''}`}>
          <p className={styles.bio}>
            I'm a graduate economist and data analyst based in Chicago, currently completing my Master of Science in Economics and Quantitative Analysis at DePaul University's Kellstadt Graduate School of Business — maintaining a 3.78 GPA.
          </p>
          <p className={styles.bio}>
            My work sits at the intersection of rigorous quantitative methods and practical business operations. I've applied regression modeling, time series forecasting, and causal inference to real-world problems, while building the organizational and communication skills that bring analysis to life in cross-functional teams.
          </p>
          <p className={styles.bio}>
            I'm actively seeking Analyst and Coordinator roles where I can apply econometric reasoning, data storytelling, and operational discipline to drive meaningful outcomes.
          </p>

          <div className={styles.tools}>
            {tools.map(t => (
              <span key={t} className={styles.tool}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
