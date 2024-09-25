import React, { useState } from "react";
import { Cart, ToggleSwitch, Modal } from "../index";
import { motion, AnimatePresence } from "framer-motion";
import useCarts from "./useCarts";
import "./Carts.css";

const Carts = ({ allCarts, setAllCarts }) => {
  console.log("Carts");

  const {
    hasMaxCarts,
    handleAddCart,
    setRefs,
    cartRefs,
  } = useCarts({
    allCarts,
    setAllCarts,
  });

  const [isRemoveSymbolsApplied, setIsRemoveSymbolsApplied] = useState(true);
  const [isSpoonToGramApplied, setIsSpoonToGramApplied] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal} />
      <div>
        <ToggleSwitch
          id="remove-symbols-toggle"
          title={"記号を消去"}
          isChecked={isRemoveSymbolsApplied}
          setIsChecked={setIsRemoveSymbolsApplied}
        />
      </div>
      <div>
        <ToggleSwitch
          id="spoon-to-gram-toggle"
          title={"大さじ・小さじ → g に変換"}
          isChecked={isSpoonToGramApplied}
          setIsChecked={setIsSpoonToGramApplied}
        />
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
