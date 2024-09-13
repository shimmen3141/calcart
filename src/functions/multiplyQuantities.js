// 文字列に含まれる数値を全てmultiplier倍する関数
export default function multiplyQuantities (str, multiplier) {
  return str.replace(/(\d+(?:\.\d+)?)/g, (match) => {
    // 小数第3位で四捨五入
    return Math.round(parseFloat(match) * multiplier * 1000) / 1000;
  });
};
