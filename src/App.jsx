import React from "react";
import "./App.scss";
import { MainPage } from "pages";
import { CartProvider, ModalProvider } from "contexts";
import { SettingToggleProvider } from "features";

const App = () => {
  return (
    <CartProvider>
      <ModalProvider>
        <SettingToggleProvider>
          <div className="app">
            <MainPage />
          </div>
        </SettingToggleProvider>
      </ModalProvider>
    </CartProvider>
  );
};

export default App;
