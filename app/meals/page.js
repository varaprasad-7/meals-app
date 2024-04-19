import Link from "next/link";
import { Suspense } from "react";
import { getMeals } from "@/lib/meals";

import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
          <p>
            Choose your favorite recipe and cook it yourself.It is easy and fun!
          </p>
          <p className={styles.cta}>
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </p>
        </h1>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
