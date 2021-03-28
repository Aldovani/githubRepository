import { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";



export default function Modal({ mensagem }) {
  const [close, setClose] = useState(false);
  return (
    <motion.div
      className="modal"
      initial={{visibility:"hidden"}}
      animate={{
        left: !close ? [-400, 20] : [20, -400],
      visibility:"visible"
      }}
      transition={{ duration: 1 }}
    >
      <h2>{mensagem}</h2>
      <button
        className="btn-close"
        onClick={() => {
          setClose(true);
        }}
      >
        ❌
      </button>
    </motion.div>
  );
}
