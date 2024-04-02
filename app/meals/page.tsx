import Link from "next/link";
import MealGrids from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealGrids meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header>
        <h1 className="text-white">Delciious meals created by you</h1>
        <p className="text-white">Share your favourite meal with other</p>
        <Link href="/meals/share" className="bg-white">
          Share Now
        </Link>
      </header>
      <main>
        <Suspense fallback={<p>Fetching Data please wait</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
