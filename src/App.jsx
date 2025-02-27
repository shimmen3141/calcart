import React from "react";
import "./App.scss";
import { MainPage } from "pages";
import { CartProvider, SettingToggleProvider, ModalProvider } from "contexts";

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
