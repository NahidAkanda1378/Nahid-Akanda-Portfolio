'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Education.module.css';

const degrees = [
  {
    degree: 'Master of Science',
    field: 'Economics & Quantitative Analysis',
    school: 'DePaul University',
    sub: 'Kellstadt Graduate School of Business',
    period: 'Aug 2024 – Jun 2026',
    gpa: '3.78 / 4.0',
    location: 'Chicago, IL',
    courses: [
      'Data Analytics I–III: Regression, Time Series, Causal Inference',
      'Data Analytics Practicum',
      'Advanced Micro & Macroeconomics',
      'Labor Economics',
      'Business Strategy & Industrial Organization',
      'Game Theory and Strategy',
    ],
    skills: ['Stata', 'R', 'Machine Learning', 'Econometrics', 'Statistical Modeling', 'Forecasting', 'Business Strategy', 'AI'],
  },
  {
    degree: 'Bachelor of Social Sciences (Honours)',
    field: 'Health Economics',
    school: 'University of Dhaka',
    sub: 'Department of Health Economics',
    period: 'Jan 2012 – Mar 2016',
    gpa: null,
    location: 'Dhaka, Bangladesh',
    courses: [
      'Health Economics & Policy',
      'Statistics & Econometrics',
      'Environmental & Labor Economics',
      'Public Finance & Development Economics',
      'Health Systems & Economic Evaluation',
    ],
    skills: ['Health Economics', 'Econometrics', 'Public Health', 'Statistics'],
  },
];

function DegreeCard({ deg, index }) {
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
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className={styles.top}>
        <div className={styles.meta}>
          <span className={styles.period}>{deg.period}</span>
          <span className={styles.location}>{deg.location}</span>
        </div>
        {deg.gpa && (
          <div className={styles.gpaBox}>
            <span className={styles.gpaNum}>{deg.gpa}</span>
            <span className={styles.gpaLabel}>GPA</span>
          </div>
        )}
      </div>

      <h3 className={styles.degree}>{deg.degree}</h3>
      <p className={styles.field}>{deg.field}</p>
      <p className={styles.school}>{deg.school}</p>
      <p className={styles.schoolSub}>{deg.sub}</p>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <div className={styles.coursesCol}>
          <p className={styles.colLabel}>Relevant Coursework</p>
          <ul className={styles.courses}>
            {deg.courses.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div className={styles.skillsCol}>
          <p className={styles.colLabel}>Skills Gained</p>
          <div className={styles.tags}>
            {deg.skills.map(s => <span key={s} className={styles.tag}>{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Education</span>
          <h2 className={styles.heading}>Academic Foundation</h2>
        </div>
        <div className={styles.grid}>
          {degrees.map((d, i) => <DegreeCard key={d.school} deg={d} index={i} />)}
        </div>
      </div>
    </section>
  );
}
