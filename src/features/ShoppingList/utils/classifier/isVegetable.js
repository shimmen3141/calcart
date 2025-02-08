import {
  vegetableList,
  vegetableExceptionList,
} from "features/ShoppingList/constants";

// 入力文字列が vegetableList の単語を含むか判定する関数
const isVegetable = (str) => {
  for (let item of vegetableExceptionList) {
    if (str.includes(item)) {
      return false;
    }
  }

  for (let item of vegetableList) {
    if (str.includes(item)) {
      return true;
    }
  }

  return false;
};

export default isVegetable;
