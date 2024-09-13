// 文字列を数値とそれ以外の部分に順に分割する関数
export default function splitIntoNumAndChar (str) {
  return str.split(/(\d+(?:\.\d+)?)/g).filter(Boolean);
};
