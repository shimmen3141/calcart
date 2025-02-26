import React from "react";
import "./App.scss";
import { MainPage } from "pages";
import { CartProvider, ToggleSwitchProvider, ModalProvider } from "contexts";

const App = () => {
  return (
    <CartProvider>
      <ModalProvider>
        <ToggleSwitchProvider>
          <div className="app">
            <MainPage />
          </div>
        </ToggleSwitchProvider>
      </ModalProvider>
    </CartProvider>
  );
};

export default App;
