import isVegetable from "./isVegetable";
import isMeat from "./isMeat";

export const CATEGORIES = {
  vegetable: {
    label: "野菜",
    classifier: (name) => isVegetable(name),
  },
  meat: {
    label: "肉",
    classifier: (name) => isMeat(name),
  },
  others: {
    label: "その他",
    classifier: (name) => true,
  },
};

export const CATEGORY_KEYS = Object.keys(CATEGORIES);