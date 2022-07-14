type types = {
  cuisine: string[];
  difficulty: string[];
  food: string[];
};

const filterTypes: types = {
  cuisine: ["asian", "american", "italian", "mexican"],
  difficulty: ["beginner", "advanced"],
  food: ["breakfast", "desert", "appetizer", "entree"],
};

export default filterTypes;
