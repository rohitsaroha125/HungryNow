import classes from "./MealsGrid.module.css";
import MealItem from "./MealItem";

export default function MealGrids({ meals }: { meals: any }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: any, i: number) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
