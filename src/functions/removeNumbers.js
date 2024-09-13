// 数値を除いた文字列を抽出する関数
export default function removeNumbers (str) {
  return str.replace(/\d+(?:\.\d+)?/g, "").trim();
};
