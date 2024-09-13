// 文字列が数値を含むかどうかを判定する関数
export default function containsNumber (str) {
    return /\d/.test(str)
};
