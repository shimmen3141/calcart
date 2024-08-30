import React from 'react';
import CopyButton from './CopyButton';

const ShoppingList = ({ items }) => {

    // 数値を全てNumberOfGroup倍する関数
    const multiplyQuantities = (info, NumberOfGroup) => {
        return info.replace(/(\d+(?:\.\d+)?)/g, (match) => {
            // 小数第3位で四捨五入
            return Math.round(parseFloat(match) * NumberOfGroup * 1000) / 1000;
        });
    };

    // 数値を含むかどうかを確認する関数
    const containsNumber = (str) => /\d/.test(str);

    // 数値を除いた文字列を抽出する関数
    const removeNumbers = (str) => {
        return str.replace(/\d+(?:\.\d+)?/g, '').trim();
    };

    // 数値とそれ以外の部分をマッチさせて分割する関数
    const splitInfo = (info) => {
        return info.split(/(\d+(?:\.\d+)?)/g).filter(Boolean);
    };

    // 第一段階: "name" と "info の形式" が同じ場合に集約
    const firstStageAggregation = items.reduce((acc, item) => {
        const updatedInfo = multiplyQuantities(item.info, item.numberOfGroup);
        const infoWithoutNumbers = removeNumbers(updatedInfo);
        const existingItem = acc.find(i => i.name === item.name && removeNumbers(i.info) === infoWithoutNumbers);

        if (existingItem) {
            const existingParts = splitInfo(existingItem.info);
            const newParts = splitInfo(updatedInfo);
            let combinedInfo = '';

            // 数値と文字列を交互に処理して結合
            for (let i = 0; i < existingParts.length; i++) {
                if (!isNaN(parseFloat(existingParts[i]))) {
                    const sum = parseFloat(existingParts[i]) + parseFloat(newParts[i]);
                    combinedInfo += sum;
                } else {
                    combinedInfo += existingParts[i];
                }
            }

            existingItem.info = combinedInfo;
        } else {
            acc.push({
                ...item,
                info: updatedInfo
            });
        }
        return acc;
    }, []);

    // 第二段階: "name" が同じで "info の形式" が異なる場合に info を + でつなげる
    const secondStageAggregation = firstStageAggregation.reduce((acc, item) => {
        const existingItem = acc.find(i => i.name === item.name);
        if (existingItem) {
            // 数値情報を先に表示
            if (containsNumber(item.info)) {
                existingItem.info = item.info + (existingItem.info ? ` + ${existingItem.info}` : '');
            } else if (item.info) {
                existingItem.info += (existingItem.info ? ` + ${item.info}` : item.info);
            }
        } else {
            acc.push({ ...item });
        }
        return acc;
    }, []);

    const shoppingListText = secondStageAggregation.map(item => `${item.name}  ${item.info}`).join('\n');

    return (
        <div>
            <h2>買い出しリスト <CopyButton text={shoppingListText} /></h2>
            <ul>
                {secondStageAggregation.map((item, index) => (
                    <li key={index}>
                        {item.name}&nbsp;&nbsp;{item.info}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
