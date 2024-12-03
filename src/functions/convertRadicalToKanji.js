import { radicalToKanjiMap } from "data";
/* 
    CJK部首、康煕部首を通常の漢字に変換する関数
    (PDFをコピーすると、漢字が部首文字に化ける場合があるため)
    参考：https://github.com/yamamaya/radicalchar
*/
export default function convertRadicalToKanji(str) {
  // 部首文字と漢字の連想配列を用いて変換
  return Array.from(str)
    .map((char) => radicalToKanjiMap.get(char) || char)
    .join("");
}
