import {
  convertFullToHalf,
  convertFractionToDecimal,
  convertEllipsisToSpace,
  convertRadicalToKanji,
  removeSymbols,
  removeExtraSpaces,
} from "functions";

// 入力内容を改行ごとに分割し、それぞれ処理する関数
export default function cleanLines(lines, isRemoveSymbolsApplied) {
  const cleanedLines = lines
    .map((line) => convertFullToHalf(line)) // 全角を半角に変換
    .map((line) => convertRadicalToKanji(line)) // 部首文字を漢字に変換
    .map((line) => convertEllipsisToSpace(line)) // 三点リーダーを半角スペースに置換
    .map((line) => (isRemoveSymbolsApplied ? removeSymbols(line) : line)) // 余計な記号を削除
    .map((line) => removeExtraSpaces(line)) // 括弧の周りの余計な空白文字を削除
    .filter((line) => line.trim()) // 空行を無視
    .map((line) => convertFractionToDecimal(line)) // 分数を小数に変換
    .map((line) => line.trim()); // 文字列前後の余計な空白文字を削除

  return cleanedLines;
}
