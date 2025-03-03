import React from "react";
import { Cart, CartsHeader, AddCartButton } from "features";
import { useCart } from "contexts";
import { motion, AnimatePresence } from "framer-motion";
import "./Carts.scss";

const Carts = () => {
  console.log("Carts");

  const { carts, setRefs } = useCart();

  return (
    <div>
      <CartsHeader title="カート" />
      <AddCartButton />
      <div className="carts">
        <AnimatePresence>
          {carts.map((cart, index) => (
            <motion.div
              key={cart.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              layout
              ref={(node) => setRefs(node, index)}
            >
              <Cart cartId={cart.id} cartNumber={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carts;
