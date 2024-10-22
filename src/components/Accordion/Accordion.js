import React from "react";
import useAccordion from "./useAccordion";

const Accordion = ({ accordionButton, children }) => {

  const { isOpen, toggleAccordion } = useAccordion();

  return (
    <div>
      <div onClick={toggleAccordion}>
        {accordionButton}
      </div>

      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div style={{ padding: isOpen ? "10px" : "0" }}>
          {isOpen && children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;