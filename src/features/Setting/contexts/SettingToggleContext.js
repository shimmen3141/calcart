import React, { createContext, useContext, useState } from "react";

// Context の作成
const SettingToggleContext = createContext();

// Context プロバイダの作成
export const SettingToggleProvider = ({ children }) => {
  const [settingToggles, setSettingToggles] = useState({
    removeSymbols: true,
    spoonToGram: true,
    classifyItems: true,
  });

  const handleToggleChange = (id) => {
    setSettingToggles((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id], // 該当のスイッチだけを反転
    }));
  };

  return (
    <SettingToggleContext.Provider
      value={{ settingToggles, handleToggleChange }}
    >
      {children}
    </SettingToggleContext.Provider>
  );
};

// カスタムフックで Context を使用
export const useSettingToggle = () => {
  return useContext(SettingToggleContext);
};
