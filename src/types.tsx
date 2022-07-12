export interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
  difficulty: "beginner" | "advanced";
  cuisine: "american" | "asian" | "italian" | "mexican";
  type: "desert" | "breakfast" | "appetizer" | "entree";
  user: "sam jones";
}
