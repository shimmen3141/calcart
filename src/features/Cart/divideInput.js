import {
  fullWidthToHalfWidth,
  fractionToDecimal,
  ellipsisToSpace,
  removeSymbols,
  removeExtraSpaces,
} from "../index";

// 入力内容を改行ごとに分割し、それぞれ処理する関数
export default function divideInput (text, isRemoveSymbolsApplied) {
  const lines = text
    .split("\n")
    .map((line) => fullWidthToHalfWidth(line)) // 全角を半角に変換
    .map((line) => ellipsisToSpace(line)) // 三点リーダーを半角スペースに置換
    .map((line) => (isRemoveSymbolsApplied ? removeSymbols(line) : line)) // 余計な記号を削除
    .map((line) => removeExtraSpaces(line)) // 括弧の周りの余計な空白文字を削除
    .filter((line) => line.trim()) // 空行を無視
    .map((line) => fractionToDecimal(line)) // 分数を小数に変換
    .map((line) => line.trim()); // 文字列前後の余計な空白文字を削除

  return lines;
};