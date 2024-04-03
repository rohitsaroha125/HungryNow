"use server";
import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData: any) {
  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  const data = await saveMeal(meal);
  if (data) {
    revalidatePath("/meals");
    redirect("/meals");
  } else {
    throw new Error("Some Error Occured");
  }
}
