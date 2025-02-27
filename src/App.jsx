import React from "react";
import "./App.scss";
import { MainPage } from "pages";
import { CartProvider } from "contexts";
import { SettingToggleProvider } from "features";
import { ModalProvider } from "modules/Modal";

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
