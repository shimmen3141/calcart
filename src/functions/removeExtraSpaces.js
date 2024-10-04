// 括弧の前と内部のスペースを削除する関数
export default function removeExtraSpaces(str) {
  const strWithoutExtraSpaces = str.replace(
    /\s*\(\s*([^)]*?)\s*\)/g,
    (_, insideParentheses) => {
      // 括弧内のスペースをすべて削除
      const noSpacesInside = insideParentheses.replace(/\s+/g, "");
      return `(${noSpacesInside})`;
    }
  );
  return strWithoutExtraSpaces;
}
