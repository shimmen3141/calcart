import React, { createContext, useContext, useState } from "react";
import { SETTINGS_CONFIG } from "../constants";

// Context の作成
const SettingToggleContext = createContext();

// SETTINGS_CONFIG をもとに初期状態を生成する
const getInitialSettingToggles = () => {
  return Object.values(SETTINGS_CONFIG).reduce((acc, setting) => {
    acc[setting.settingId] = setting.defaultToggle;
    return acc;
  }, {});
};

// Context プロバイダの作成
export const SettingToggleProvider = ({ children }) => {
  const [settingToggles, setSettingToggles] = useState(
    getInitialSettingToggles()
  );

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
