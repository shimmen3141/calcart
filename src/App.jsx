import React from "react";
import "./App.scss";
import { AppHeader, MainContents, AppFooter } from "./features/index";
import { ToggleSwitchProvider, ModalProvider } from "./features/index";

const App = () => {
  return (
    <ModalProvider>
      <ToggleSwitchProvider>
        <div className="app">
          <AppHeader />
          <MainContents />
          <AppFooter />
        </div>
      </ToggleSwitchProvider>
    </ModalProvider>
  );
};

export default App;
