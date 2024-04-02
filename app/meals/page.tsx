import Link from "next/link";
import MealGrids from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();

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
        <MealGrids meals={meals} />
      </main>
    </>
  );
}
