import React from 'react';
import gramPerTeaspoon from "../dataset";

const IngredientInput = ({ onChange }) => {

    // 全角を半角に変換する関数
    function FullWidthToHalfWidth(str) {

        // 半角変換
        var halfVal = str.replace(/[！-～]/g,
            function (tmpStr) {
                // 文字コードをシフト
                return String.fromCharCode(tmpStr.charCodeAt(0) - 0xFEE0);
            }
        );

        // 文字コードシフトで対応できない文字の変換
        return halfVal.replace(/”/g, "\"")
            .replace(/’/g, "'")
            .replace(/‘/g, "`")
            .replace(/￥/g, "\\")
            .replace(/　/g, " ")
            .replace(/〜/g, "~");
    }

    // 分数を小数に変換する関数
    function FractionsToDecimals(str) {

        // "数値と数値/数値" の形式の分数を小数に変換
        str = str.replace(/(\d+)\s*と\s*(\d+)\s*\/\s*(\d+)/g, (match, whole, numerator, denominator) => {
            return (parseFloat(whole) + parseFloat(numerator) / parseFloat(denominator)).toString();
        });

        // "数値/数値" の形式の分数を小数に変換
        str = str.replace(/(\d+)\s*\/\s*(\d+)/g, (match, numerator, denominator) => {
            return (parseFloat(numerator) / parseFloat(denominator)).toString();
        });

        return str;
    }

    // 大さじ・小さじ表記をグラム表記に変換する関数
    function SpoonToGram(name, info) {

        // nameがgramPerTeaspoonに含まれているか確認
        let seasoningName = Object.keys(gramPerTeaspoon).find(key => name.includes(key));
        
        if (seasoningName) {

            // 一般的な "大さじ" 、"小さじ" の表記に変換
            info = info
                .replace(/匙/g, "さじ")
                .replace(/お\s*お\s*さ\s*じ/g, "大さじ")
                .replace(/こ\s*さ\s*じ/g, "小さじ");

            // 大さじ表記をグラム表記に変換
            info = info.replace(/大\s*さ\s*じ\s*(\d+(?:\.\d+)?)/g, (match, tablespoon) => {
                const grams = 3 * gramPerTeaspoon[seasoningName] * parseFloat(tablespoon);
                return `${grams}g`;
            });

            // 小さじ表記をグラム表記に変換
            info = info.replace(/小\s*さ\s*じ\s*(\d+(?:\.\d+)?)/g, (match, teaspoon) => {
                const grams = gramPerTeaspoon[seasoningName] * parseFloat(teaspoon);
                return `${grams}g`;
            });

            return info;
        } else {
            return info;
        }
    }

    const handleInputChange = (event) => {
        const inputText = event.target.value;

        const lines = inputText
            .split('\n')
            .map(line => FullWidthToHalfWidth(line))  // 全角を半角に変換
            .map(line => FractionsToDecimals(line));  // 分数を小数に変換

        const parsedIngredients = lines
            .filter(line => line.trim()) // 空行を無視
            .map(line => {

                // 最初のスペースで2つに分割
                var parts = line.split(/(?<=^[^\s]+)\s/);
                var [name, quantityWithUnit] = parts;
                var info = quantityWithUnit !== undefined ? quantityWithUnit.replace(/\s+/g, '') : "適量";

                info = SpoonToGram(name, info);

                
                return { name, info };
            })
            .filter(ingredient => ingredient !== null);

        onChange(parsedIngredients);
    };

    return (
        <div>
            <h2>材料を入力してください</h2>
            <textarea
                onChange={handleInputChange}
                placeholder={`例:\nにんじん 2本\nタマネギ 3個\n醤油 50ml`}
                rows="30"
                cols="50"
            />
        </div>
    );
}

export default IngredientInput;
