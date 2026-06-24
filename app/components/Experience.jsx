'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Experience.module.css';

const jobs = [
  {
    role: 'KGSB Student Ambassador',
    org: 'DePaul University',
    type: 'Part-time',
    period: 'Sep 2025 – Present',
    location: 'Chicago, IL · Hybrid',
    color: 'teal',
    bullets: [
      'Represent Kellstadt Graduate School of Business through prospective-student outreach, information sessions, and recruitment events.',
      'Track and maintain prospective-student records — event participation, program inquiries, follow-up communication, and stakeholder interactions — to support organized admissions workflows.',
      'Communicate program information clearly to students, families, and university stakeholders, while supporting event coordination, meeting preparation, and cross-team collaboration.',
    ],
  },
  {
    role: 'Business Operations & Data Analyst',
    org: 'Zubion Development Solutions',
    type: 'Full-time',
    period: 'Jan 2018 – Feb 2021',
    location: 'Bangladesh',
    color: 'amber',
    bullets: [
      'Provided administrative and operational support: organized records, client documentation, payment information, internal reports, and workflow tracking systems.',
      'Built and updated Excel-based trackers to monitor tasks, documentation status, deadlines, payment records, client activity, and process delays.',
      'Prepared routine reports, summaries, presentations, and performance updates for management; supported communication, documentation review, and workflow improvement initiatives.',
    ],
  },
  {
    role: 'Research Intern',
    org: 'University of Dhaka, Dept. of Health Economics',
    type: 'Part-time',
    period: 'Aug 2015 – Dec 2015',
    location: 'Dhaka, Bangladesh',
    color: 'navy',
    bullets: [
      'Collected, reviewed, and organized 120+ healthcare research records, supporting survey tracking, documentation review, and data quality checks.',
      "Assisted with stakeholder communication and produced structured research summaries to support the department's ongoing research projects.",
    ],
  },
];

function JobCard({ job, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles[`card_${job.color}`]} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className={styles.cardLeft}>
        <span className={styles.period}>{job.period}</span>
        <span className={styles.location}>{job.location}</span>
        <span className={`${styles.badge} ${styles[`badge_${job.color}`]}`}>{job.type}</span>
      </div>

      <div className={styles.cardRight}>
        <h3 className={styles.role}>{job.role}</h3>
        <p className={styles.org}>{job.org}</p>
        <ul className={styles.bullets}>
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Experience</span>
          <h2 className={styles.heading}>Where I've Made an Impact</h2>
        </div>

        <div className={styles.timeline}>
          {jobs.map((j, i) => <JobCard key={j.role} job={j} index={i} />)}
        </div>
      </div>
    </section>
  );
}
