// 文字列先頭から括弧や記号を消去する関数
export default function removeSymbols(str) {
  // 文字列先頭の()に囲まれた内容を消去する
  const strWithoutParentheses = str.replace(/^\s*\(.*?\)\s*/, "");
  // カタカナ、ひらがな、漢字、アルファベット、数字以外の記号を消去する
  const strWithoutSymbols = strWithoutParentheses.replace(
    /^[^\u30a0-\u30ff\u3040-\u309f\u4e00-\u9fcfA-Za-z0-9]+/,
    ""
  );

  return strWithoutSymbols;
};
