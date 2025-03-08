import { MainPage } from "pages";
import { CartProvider } from "contexts";
import { SettingToggleProvider } from "features";
import { ModalProvider } from "modules";
import "./App.scss";

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
