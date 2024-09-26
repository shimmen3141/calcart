import React from "react";
import {
  Cart,
  ToggleSwitch,
  HelpButton,
  RemoveSymbolsModal,
  SpoonToGramModal,
  useModal,
  useToggleSwitch,
} from "../index";
import { motion, AnimatePresence } from "framer-motion";
import useCarts from "./useCarts";
import "./Carts.css";

const Carts = ({ allCarts, setAllCarts }) => {
  console.log("Carts");

  const { hasMaxCarts, handleAddCart, setRefs, cartRefs } = useCarts({
    allCarts,
    setAllCarts,
  });

  const { toggleStates, handleToggleSwitchChange } = useToggleSwitch();

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

  return (
    <div>
      <div>
        <ToggleSwitch
          id="removeSymbols"
          title={"記号を消去"}
          isChecked={toggleStates.removeSymbols}
          onChange={handleToggleSwitchChange}
        />
        <HelpButton onClick={() => handleOpenModal("removeSymbols")} />
        <RemoveSymbolsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
      <div>
        <ToggleSwitch
          id="spoonToGram"
          title={"大さじ・小さじ → g に変換"}
          isChecked={toggleStates.spoonToGram}
          onChange={handleToggleSwitchChange}
        />
        <HelpButton onClick={() => handleOpenModal("spoonToGram")} />
        <SpoonToGramModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
      <div className="input-group-container">
        <AnimatePresence>
          {allCarts.map((cart, index) => (
            <motion.div
              key={cart.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              layout
              className="input-group"
              ref={(node) => setRefs(node, index)}
            >
              <Cart
                allCarts={allCarts}
                setAllCarts={setAllCarts}
                cartID={cart.id}
                cartNumber={index}
                cartRefs={cartRefs}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button onClick={handleAddCart} disabled={hasMaxCarts()}>
        入力欄を追加
      </button>
    </div>
  );
};

export default Carts;
