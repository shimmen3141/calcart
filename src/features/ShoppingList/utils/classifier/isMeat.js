import { meatList } from "features/ShoppingList/constants";

// 文字列が meatList の単語を含むか判定する関数
const isMeat = (str) => {
  for (let item of meatList) {
    if (str.includes(item)) {
      return true;
    }
  }

  return false;
};

export default isMeat;
