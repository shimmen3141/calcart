const CartTextArea = () => {
    return (
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder={`---例1 (1行1材料)---\nにんじん 2本\nタマネギ 3個\n醤油 50ml\n\n---例2 (2行1材料)---\nにんじん\n2本\nタマネギ\n3個\n醤油\n50ml`}
      />
    );
};