import React from "react";

import style from "./Accordion.module.scss";

export const Summary = ({ children, fn }) => {
  return (
    <div onClick={fn} className={style.summary}>
      {children}
      <i className="fas fa-chevron-down"></i>
    </div>
  );
};
export const Detail = ({ children, open }) => {
  return (
    <div className={`${style.details} ${open ? style.open : style.close}`}>
      {children}
    </div>
  );
};
const Accordion = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const fn = () => setOpen((v) => !v);

  return (
    <div className={style.accordion}>
      {React.cloneElement(children[0], { fn: fn })}
      {React.cloneElement(children[1], { open: open })}
    </div>
  );
};

export default Accordion;
