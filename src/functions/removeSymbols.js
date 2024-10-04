// 文字列先頭から括弧や記号を消去する関数
export default function removeSymbols(str) {
  const parenthesesRegex = /^\s*\(.*?\)\s*/;
  const symbolsRegex =
    /^[^\u30a0-\u30ff\u3040-\u309f\u4e00-\u9fcfA-Za-z0-9()]+/;

  while (parenthesesRegex.test(str) || symbolsRegex.test(str)) {
    // 文字列先頭の()に囲まれた内容を消去する
    str = str.replace(parenthesesRegex, "");
    // カタカナ、ひらがな、漢字、アルファベット、数字、()以外の記号を消去する
    str = str.replace(symbolsRegex, "");
  }

  return str;
}
