// 文字列先頭から括弧や記号を消去する関数
export default function removeSymbols(str) {
  // ()とその中身の正規表現
  const parenthesesRegex = /^\s*\(.*?\)\s*/;
  // カタカナ、ひらがな、漢字、数字、()以外の正規表現
  const symbolsRegex =
    /^[^\u30a0-\u30ff\u3040-\u309f\u4e00-\u9fcf0-9()]+/;

  while (parenthesesRegex.test(str) || symbolsRegex.test(str)) {
    // 文字列先頭の()に囲まれた内容を消去する
    str = str.replace(parenthesesRegex, "");
    // カタカナ、ひらがな、漢字、アルファベット、数字、()以外の記号を消去する
    str = str.replace(symbolsRegex, "");
  }

  return str;
}
