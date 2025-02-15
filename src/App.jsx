import React from "react";
import "./App.scss";
import { AppHeader, AppFooter } from "components";
import { MainContents } from "features";
import { CartProvider, ToggleSwitchProvider, ModalProvider } from "contexts";

const App = () => {
  return (
    <CartProvider>
      <ModalProvider>
        <ToggleSwitchProvider>
          <div className="app">
            <AppHeader />
            <MainContents />
            <AppFooter />
          </div>
        </ToggleSwitchProvider>
      </ModalProvider>
    </CartProvider>
  );
};

export default App;
