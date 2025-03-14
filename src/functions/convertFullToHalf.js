// 全角の記号、数字、アルファベット等を半角に変換する関数
export default function convertFullToHalf(str) {
  // 半角変換
  const convertedStr = str
    .replace(/[！-～]/g, function (tmpStr) {
      // 文字コードをシフト
      return String.fromCharCode(tmpStr.charCodeAt(0) - 0xfee0);
    })
    // 文字コードシフトで対応できない文字の変換
    .replace(/”/g, '"')
    .replace(/’/g, "'")
    .replace(/‘/g, "`")
    .replace(/￥/g, "\\")
    .replace(/　/g, " ")
    .replace(/〜/g, "~");

  return convertedStr;
}
