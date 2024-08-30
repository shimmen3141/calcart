import React from 'react';

const NumberOfGroupInput = ({ onChange }) => {
    const handleChange = (event) => {
        onChange(Number(event.target.value));
    };

    return (
        <div>
            <h2>人数を入力してください</h2>
            <input type="number" min="0" defaultValue="1" onChange={handleChange} />
        </div>
    );
}

export default NumberOfGroupInput;
