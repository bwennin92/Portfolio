import React from "react";
import { motion } from "framer-motion";

const hobbieComp = (props) => {
  return (
    <motion.div
     initial={{ opacity: 0 }} whileInView={{ opacity: 100 }} transition={{duration: 1.5}} viewport={{ amount: "some"}}>
      <div>{props.children}</div>
    </motion.div>
  );
};

export default hobbieComp;
