import {
  VEGETABLE_LIST,
  VEGETABLE_EXCEPTION_LIST,
} from "features/ShoppingList/constants";

// 入力文字列が VEGETABLE_LIST の単語を含むか判定する関数
const isVegetable = (str) => {
  for (let item of VEGETABLE_EXCEPTION_LIST) {
    if (str.includes(item)) {
      return false;
    }
  }

  for (let item of VEGETABLE_LIST) {
    if (str.includes(item)) {
      return true;
    }
  }

  return false;
};

export default isVegetable;
