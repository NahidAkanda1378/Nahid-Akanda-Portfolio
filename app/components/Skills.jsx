'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Skills.module.css';

const categories = [
  {
    name: 'Statistical & Econometric Methods',
    icon: '∿',
    color: 'amber',
    items: ['Regression Analysis', 'Time Series Forecasting', 'Causal Inference', 'Econometrics', 'Statistical Modeling', 'Machine Learning', 'Forecasting', 'Hypothesis Testing'],
  },
  {
    name: 'Technical Tools',
    icon: '⟨⟩',
    color: 'teal',
    items: ['Stata', 'R', 'Python', 'Excel (Advanced)', 'SQL', 'Tableau', 'Data Visualization'],
  },
  {
    name: 'Economics & Business',
    icon: '◎',
    color: 'navy',
    items: ['Advanced Microeconomics', 'Advanced Macroeconomics', 'Labor Economics', 'Industrial Organization', 'Game Theory', 'Business Strategy', 'Health Economics', 'Public Finance'],
  },
  {
    name: 'Operations & Administration',
    icon: '▦',
    color: 'amber',
    items: ['Records & Data Management', 'Workflow Tracking Systems', 'Report & Summary Writing', 'Stakeholder Communication', 'Event Coordination', 'Cross-team Collaboration', 'Documentation Review'],
  },
];

function SkillCard({ cat, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles[`card_${cat.color}`]} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardTop}>
        <span className={styles.icon}>{cat.icon}</span>
        <h3 className={styles.catName}>{cat.name}</h3>
      </div>
      <div className={styles.items}>
        {cat.items.map(item => (
          <span key={item} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Skills</span>
          <h2 className={styles.heading}>Areas of Expertise</h2>
        </div>

        <div className={styles.grid}>
          {categories.map((c, i) => <SkillCard key={c.name} cat={c} index={i} />)}
        </div>
      </div>
    </section>
  );
}
