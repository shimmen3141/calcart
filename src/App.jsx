import React from "react";
import "./App.css";
import { AppHeader, MainContents, AppFooter } from "./components/index";
import { ToggleSwitchProvider } from "./contexts/ToggleSwitchContext";

const App = () => {
  return (
    <ToggleSwitchProvider>
      <AppHeader />
      <MainContents />
      <AppFooter />
    </ToggleSwitchProvider>
  );
};

export default App;
