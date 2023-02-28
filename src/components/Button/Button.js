import React from "react";
import "./Button.scss";
import BarLoader from "react-spinners/BarLoader";

export const Submit = ({ value, isSubmitting }) => (
  <button className="btn-submit">
    {!isSubmitting ? value : <BarLoader color="#fefbd8" />}
  </button>
);
