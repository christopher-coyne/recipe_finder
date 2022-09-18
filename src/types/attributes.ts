export type cuisineAttribute = "american" | "italian" | "mexican" | "asian";
export type difficultyAttribute = "beginner" | "advanced";
export type foodAttribute = "breakfast" | "desert" | "appetizer" | "entree";

export const cuisineOptions: readonly string[] = [
  "american",
  "italian",
  "mexican",
  "asian",
];
export type Cuisine = typeof cuisineOptions[number];

export const difficultyOptions: readonly string[] = ["beginner", "advanced"];
export type Difficulty = typeof difficultyOptions[number];

export const foodOptions: readonly string[] = [
  "breakfast",
  "desert",
  "appetizer",
  "entree",
];
export type FoodType = typeof cuisineOptions[number];

export const attributes = {
  food: foodOptions,
  difficulty: difficultyOptions,
  cuisine: cuisineOptions,
};
/*
export type Attributes = {
  cuisine: Cuisine;
  difficulty: Difficulty;
  foodType: FoodType;
};
*/
