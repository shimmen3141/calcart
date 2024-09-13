// 文字列に含まれる数値を全て小数第3位で四捨五入する関数
export default function roundQuantities (str) {
  return str.replace(/(\d+(?:\.\d+)?)/g, (match) => {
    // 小数第3位で四捨五入
    return Math.round(parseFloat(match) * 1000) / 1000;
  });
};
