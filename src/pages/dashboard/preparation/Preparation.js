import React, { useState, useEffect } from "react";
import { getAutorization } from "state/AutorizationSlice";
import { useSelector } from "react-redux";
import styles from "./Preparation.module.scss";

const Order = ({ choice }) => {
  return (
    <div className={`container ${styles.order}`}>
      <div className="container-header ">
        <h1 className="titel">Order of {choice}</h1>
      </div>
      <div className="container-body"></div>
    </div>
  );
};
const Demond = ({ choice }) => {
  return (
    <div className={`container ${styles.order}`}>
      <div className="container-header ">
        <h1 className="titel">Demond </h1>
      </div>
      <div className="container-body"></div>
    </div>
  );
};
const Menu = ({ choice, exit }) => {
  return (
    <div className={`container ${styles.menu}`}>
      <div className="container-header ">
        <h1 className="titel">
          Menu of {choice}{" "}
          <button onClick={() => exit(null)} className={styles.btn2}>
            Exit{" "}
          </button>
        </h1>
        <div className="left"></div>
      </div>
      <div className="container-body"></div>
    </div>
  );
};
const Choice = ({ selecet }) => {
  return (
    <div className={styles.choixs}>
      <button onClick={() => selecet("kitchen")} className={styles.choix}>
        <i class="fa-solid fa-plate-wheat"></i>kitchen
      </button>
      <button onClick={() => selecet("coffee")} className={styles.choix}>
        {" "}
        <i class="fa-solid fa-champagne-glasses"></i>coffee
      </button>
    </div>
  );
};
const Preparation = () => {
  const permission = ["kitchen", "coffee"];
  const [choice, setChoice] = useState(null);
  const autorization = useSelector(getAutorization);
  useEffect(() => {
    if (autorization.length === 1 && permission.includes(autorization[0].tag))
      setChoice(autorization[0].tag);
  }, []);

  const content = choice ? (
    <>
      <Menu choice={choice} exit={setChoice} />
      <Demond choice={choice} />
      <Order choice={choice} />
    </>
  ) : (
    <Choice selecet={setChoice} />
  );
  return (
    <div
      className={`content-dashboard dashboardHeight boxcenter ${styles.preparation}`}
    >
      {content}
    </div>
  );
};

export default Preparation;
