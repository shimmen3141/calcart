import { isMeat, isVegetable } from "features/ShoppingList/utils";

export const CATEGORIES = {
  vegetable: {
    label: "野菜",
    listStyle: "vegetableList",
    classifier: (name) => isVegetable(name),
  },
  meat: {
    label: "肉",
    listStyle: "meatList",
    classifier: (name) => isMeat(name),
  },
  others: {
    label: "その他",
    listStyle: "standardList",
    classifier: (name) => true,
  },
};

export const CATEGORY_KEYS = Object.keys(CATEGORIES);
