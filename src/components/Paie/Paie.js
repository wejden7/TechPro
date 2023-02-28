import React, { useRef } from "react";
import BarLoader from "react-spinners/BarLoader";
import ReactToPrint from "react-to-print";

import ModelForm from "components/Modal/FormModel";
import TablePaie from "./components/TablePaie";

import useFormPaie from "Hooks/UseFormPaie";

import { useSelector } from "react-redux";
import { selectData } from "state/ParametreSlice";

import "./Paie.style.scss";

const Section = ({ titel, data, bind }) => {
  return (
    <div className="paie-section">
      <h1 className="titel-section-paie">{titel}</h1>
      <div className="liste-grid">
        {data.map((item, index) => (
          <div className="checkbox-liste-grid" key={index}>
            <label htmlFor={item._id}>{item.label}</label>
            <input {...bind} value={item._id} id={item._id} type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
};

const BtnSubmit = ({ isSubmitting }) => (
  <button className="btn-submit-paie">
    {!isSubmitting ? (
      "Generate fichier de paie "
    ) : (
      <BarLoader color="#fefbd8" />
    )}
  </button>
);

const BtnPrint = ({ data, ref_ }) =>
data&&(
    <ReactToPrint
      trigger={() => (
        <button type="button" className="btn-submit-paie">
          Print
        </button>
      )}
      content={() => ref_.current}
    />
  );

const FormPaie = (props) => {
  console.log("date : ",props)
  const componentRef = useRef();
  const { bonus, retenue } = useSelector(selectData);
  const { register, onSubmit, errors, isSubmitting, error, result } =
    useFormPaie(props);

  return (
    <div className="paie">
      <form onSubmit={onSubmit} className="form-paie">
        <Section data={bonus} titel="Bonus" bind={register("bonus")} />
        <Section data={retenue} titel="Retenue " bind={register("retenue")} />
        <div className="btn-list">
          <BtnSubmit isSubmitting={isSubmitting} /> 
          <BtnPrint data={result} ref_={componentRef} />
        </div>
      </form>
      <TablePaie data={result} ref={componentRef} />
    </div>
  );
};
const Paie = (props) => {
  return (
    <ModelForm titel="Update" btnContent="" btnClass="btn-paie">
      <FormPaie {...props} />
    </ModelForm>
  );
};

export default Paie;
