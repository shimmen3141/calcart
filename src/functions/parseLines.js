// 入力形式をもとに入力内容を処理する関数
export default function parseLines(lines, currentFormat) {
  let parsedIngredients = [];

  if (currentFormat === "one-line") {
    parsedIngredients = lines
      .map((line) => {
        // 最初のスペースで2つに分割
        const [name, quantity] = line.split(/(?<=^[^\s]+)\s/);
        const info = quantity ? quantity.replace(/\s+/g, "") : "適量";
        return { name: name, info: info };
      })
      .filter((ingredient) => ingredient !== null);
  } else if (currentFormat === "two-line") {
    for (let i = 0; i < lines.length; i += 2) {
      // 偶数行が材料名
      const name = lines[i];
      // 奇数行が分量
      const quantity = lines[i + 1] ?? "適量";
      parsedIngredients.push({ name: name, info: quantity });
    }
  }

  return parsedIngredients;
}
