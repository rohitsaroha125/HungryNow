import styles from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";

export default async function MealsDetailPage({ params }: { params: any }) {
  const meal = await getMeal(params.slug);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} fill alt={`${meal.title} - Image`} />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href="mailto:email">{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
