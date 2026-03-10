import Image from "next/image";
import styles from "./AboutCard.module.css";
import ScrollReveal from "./ScrollReveal";

interface AboutCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export default function AboutCard({ image, title, description, delay = 0 }: AboutCardProps) {
  return (
    <ScrollReveal direction="up" delay={delay}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
