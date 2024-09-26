import React, { useState } from "react";
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

  const [isRemoveSymbolsApplied, setIsRemoveSymbolsApplied] = useState(true);
  const [isSpoonToGramApplied, setIsSpoonToGramApplied] = useState(true);

  const { toggleStates, handleToggleSwitchChange } = useToggleSwitch();

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

  return (
    <div>
      <div>
        {/* <ToggleSwitch
          id="removeSymbols"
          title={"記号を消去"}
          isChecked={isRemoveSymbolsApplied}
          setIsChecked={setIsRemoveSymbolsApplied}
        /> */}
        <ToggleSwitch
          id="removeSymbols"
          title={"記号を消去"}
          isChecked={toggleStates.removeSymbols}
          setIsChecked={() => handleToggleSwitchChange("removeSymbols")}
        />
        <HelpButton onClick={() => handleOpenModal("removeSymbols")} />
        <RemoveSymbolsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
      <div>
        {/* <ToggleSwitch
          id="spoonToGram"
          title={"大さじ・小さじ → g に変換"}
          isChecked={isSpoonToGramApplied}
          setIsChecked={setIsSpoonToGramApplied}
        /> */}
        <ToggleSwitch
          id="spoonToGram"
          title={"大さじ・小さじ → g に変換"}
          isChecked={toggleStates.spoonToGram}
          setIsChecked={() => handleToggleSwitchChange("spoonToGram")}
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
                isRemoveSymbolsApplied={isRemoveSymbolsApplied}
                isSpoonToGramApplied={isSpoonToGramApplied}
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
