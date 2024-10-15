import { vegetableList, vegetableExceptionList } from "../index";

// 文字列が vegetableList の単語を含むか判定する関数
const isVegetable = (input) => {
  for (let item of vegetableExceptionList) {
    if (input.includes(item)) {
      return false;
    }
  }

  for (let row of vegetableList) {
    for (let veg of row) {
      if (input.includes(veg)) {
        return true;
      }
    }
  }
  return false;
};

export default isVegetable;
