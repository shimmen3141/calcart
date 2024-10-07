import React, { createContext, useContext, useState } from "react";

// Context の作成
const ToggleSwitchContext = createContext();

// Context プロバイダの作成
export const ToggleSwitchProvider = ({ children }) => {
  const [toggleStates, setToggleStates] = useState({
    removeSymbols: true,
    spoonToGram: true,
    classifyItems: true,
  });

  const handleSwitchChange = (id) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id], // 該当のスイッチだけを反転
    }));
  };

  return (
    <ToggleSwitchContext.Provider
      value={{ toggleStates, handleSwitchChange }}
    >
      {children}
    </ToggleSwitchContext.Provider>
  );
};

// カスタムフックで Context を使用
export const useToggleSwitch = () => {
  return useContext(ToggleSwitchContext);
};
