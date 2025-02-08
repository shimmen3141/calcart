import { MEAT_LIST } from "features/ShoppingList/constants";

// 文字列が MEAT_LIST の単語を含むか判定する関数
const isMeat = (str) => {
  for (let item of MEAT_LIST) {
    if (str.includes(item)) {
      return true;
    }
  }

  return false;
};

export default isMeat;
