import React, { useState } from "react";
import { Cart, ToggleSwitch } from "../index";
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

  const [applyRemoveSymbols, setApplyRemoveSymbols] = useState(true);
  
  return (
    <div>
      <ToggleSwitch
        title={"記号を消去"}
        isChecked={applyRemoveSymbols}
        setIsChecked={setApplyRemoveSymbols}
      />
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
                applyRemoveSymbols={applyRemoveSymbols}
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
