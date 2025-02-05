import React from 'react';
import useCopyButton from './useCopyButton';
import "./CopyButton.scss";

const CopyButton = ({ text }) => {

    const { copyStatus, handleCopy } = useCopyButton({ text });

    return (
        <button className="copyButton" onClick={handleCopy}>
            {copyStatus}
        </button>
    );
};

export default CopyButton;
