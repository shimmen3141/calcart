// 入力内容をもとに入力形式を分類する関数
export default function classifyInputFormat (lines) {
  let currentFormat = "";
  if (lines.length === 0) {
    currentFormat = "not-entered";
  } else {
    // 数字を含むかつ空白文字を含まない行がある場合、"two-line"と判定
    const isTwoLine = lines.some((line) => /\d/.test(line) && !/\s/.test(line));
    currentFormat = isTwoLine ? "two-line" : "one-line";
  }

  return currentFormat;
};
