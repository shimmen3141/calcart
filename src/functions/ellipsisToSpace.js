// 三点リーダーを半角スペースに置換する関数
export default function ellipsisToSpace(str) {
  // 三点リーダー("…"), ピリオド("."), 中黒("・", "·")の繰り返しを半角スペースに置換
  return str.replace(/(\.{3,}|・{3,}|·{3,}|…+)/g, " ");
};