import React from "react";
import { useNavigate } from "react-router-dom";
import imageNotFound from "utils/assets/images/404Error.svg";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={`content-dashboard ${styles.notFound} `}>
      <img className={styles.img} src={imageNotFound} alt="not found" />
      <h1 className={styles.titel}>Oops! Page not found</h1>
      <p className={styles.text}>
        The page you are trying to access does not exist or has been<br></br>{" "}
        moved.
        <br />
        Try going back to our homepage.<br/>
       new{ process.env.REACT_APP_BASE_URL}
      </p>

      <button
        onClick={() => navigate("/", { replace: true })}
        className={styles.btn}
      >
        Go to homepage
      </button>
    </div>
  );
};

export default NotFound;
