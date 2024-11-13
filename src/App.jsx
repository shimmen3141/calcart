import React from "react";
import "./App.scss";
import { AppHeader, MainContents, AppFooter } from "./features/index";
import { ToggleSwitchProvider } from "./contexts/ToggleSwitchContext";

const App = () => {
  return (
    <ToggleSwitchProvider>
      <div className="app">
        <AppHeader />
        <MainContents />
        <AppFooter />
      </div>
    </ToggleSwitchProvider>
  );
};

export default App;
