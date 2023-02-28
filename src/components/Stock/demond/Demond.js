import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";
import mixKit from "utils/assets/sound/mixkit.mp3";
import styles from "./Demond.module.scss";

const Item = ({ remove, value, index }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0, scale: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: "100%", opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      layout
      className={`${styles.item}`}
    >
      item {value} <button onClick={() => remove(index)}>remove</button>{" "}
    </motion.div>
  );
};
const ListDemond = () => {
  const [data, setData] = React.useState([1]);
  const [play, { stop, isPlaying }] = useSound(mixKit);

  const handleClick = () => {
    if (isPlaying) stop();
    play();
  };
  const add = () => {
    handleClick();
    const temp = [...data];
    temp.unshift(2);
    setData((d) => temp);
  };
  const remove = (index_) => {
    setData((d) => d.filter((_, index) => index !== index_));
  };

  return (
    <div className="container-body">
      <button onClick={add}>add</button>
      <AnimatePresence>
        {[...data].map((item, index) => (
          <Item key={item} index={index} value={item} remove={remove} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Demonde = () => {
  return (
    <div className={`container ${styles.demond}`}>
      <div className="container-header">
        <h1 className="titel">Demond</h1>
      </div>
      <ListDemond />
    </div>
  );
};

export default Demonde;
