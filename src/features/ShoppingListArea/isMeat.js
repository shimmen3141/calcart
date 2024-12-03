import { meatList } from "data";

// 文字列が meatList の単語を含むか判定する関数
const isMeat = (input) => {
  for (let meat of meatList) {
    if (input.includes(meat)) {
      return true;
    }
  }
  return false;
};

export default isMeat;
