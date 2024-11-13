import React from "react";
import { Cart } from "../index";
import { motion, AnimatePresence } from "framer-motion";
import useCarts from "./useCarts";
import "./Carts.scss";

const Carts = ({ allCarts, setAllCarts }) => {
  console.log("Carts");

  const { hasMaxCarts, handleAddCart, setRefs, cartRefs } = useCarts({
    allCarts,
    setAllCarts,
  });

  return (
    <div>
      <button
        className="addCartButton"
        onClick={handleAddCart}
        disabled={hasMaxCarts()}
      >
        + カートを追加
      </button>
      <div className="carts">
        <AnimatePresence>
          {allCarts.map((cart, index) => (
            <motion.div
              key={cart.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              layout
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
    </div>
  );
};

export default Carts;
