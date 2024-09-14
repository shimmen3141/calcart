import React from 'react';
import useCopyButton from './useCopyButton';

const CopyButton = ({ text }) => {

    const { copyStatus, handleCopy } = useCopyButton({ text });

    return (
        <button onClick={handleCopy}>
            {copyStatus}
        </button>
    );
};

export default CopyButton;
