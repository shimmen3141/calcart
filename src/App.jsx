import React from "react";
import "./App.scss";
import { AppHeader, MainContents, AppFooter } from "./features/index";
import { CartProvider, ToggleSwitchProvider, ModalProvider } from "./features/index";

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
