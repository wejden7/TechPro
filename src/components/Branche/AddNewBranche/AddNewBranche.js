import React from "react";
import useBranche from "Hooks/UseBranche";
import BarLoader from "react-spinners/BarLoader";
import "./AddNewBranche.style.scss";
import FormInput from "../Components/FomrInput/FormInput";
const AddNewBranche = () => {
  const { onSubmit, isSubmitting, ...other } = useBranche(
    { label: "", zones: [{ label: "" }], pointPreparation: [{ label: "" }] },
    false
  );

  return (
    <div className="section">
      <h1 className="title-groupe">Branche</h1>
      <form onSubmit={onSubmit} className="form-group">
        <FormInput useForm={other} />
       
        <button type="submit" className="btn-save">
          {" "}
          {!isSubmitting ? "save" : <BarLoader color="#fefbd8" width={30} />}
        </button>
      </form>
    </div>
  );
};

export default AddNewBranche;
