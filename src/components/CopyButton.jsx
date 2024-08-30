import React, { useState } from 'react';

const CopyButton = ({ text }) => {

    // ボタンの表示テキストを管理する変数
    const [copyStatus, setCopyStatus] = useState('コピー');

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                // コピー成功時にボタンのテキストを変更
                setCopyStatus('コピー完了！');
                // 2.5秒後に元のテキストに戻す
                setTimeout(() => setCopyStatus('コピー'), 2500);
            })
            .catch(err => {
                console.error('コピーに失敗しました:', err);
            });
    };

    return (
        <button onClick={handleCopy}>
            {copyStatus}
        </button>
    );
};

export default CopyButton;
