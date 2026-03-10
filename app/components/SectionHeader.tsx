import styles from "./SectionHeader.module.css";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${className}`}>
      <ScrollReveal direction="up" delay={0.1}>
        <span className={styles.subtitle}>{subtitle}</span>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <h2 className={styles.title}>{title}</h2>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.3}>
        <div className={styles.divider} />
      </ScrollReveal>
    </div>
  );
}
