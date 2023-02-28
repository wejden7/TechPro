import React, { useEffect } from "react";

import useFormParametre from "Hooks/UseParametre";
import BarLoader from "react-spinners/BarLoader";
import { selectData, getParametre } from "state/ParametreSlice";
import { useDispatch, useSelector } from "react-redux";

import Container from "./Components/Container";
import Retenue from "./Components/Retenue";
import Bonus from "./Components/Bonus";

import "./Parametre.style.scss";

const ButtonSubmit = ({ isSubmitting }) => (
  <button className=" btn btn-save" type="submit">
    {!isSubmitting ? "save" : <BarLoader color="#fefbd8" width={30} />}
  </button>
);

const ParametreForm = ({ defaultValues }) => {
  const useForm = useFormParametre(defaultValues);
  const { onSubmit, isSubmitting, error } = useForm;

  return (
    <form className="form-parametre" onSubmit={onSubmit}>
      <p>{error}</p>
      <ButtonSubmit isSubmitting={isSubmitting} />
      <div className="form-parametre-containt">
        <Container useForm={useForm} />
        <Bonus useForm={useForm} />
        <Retenue useForm={useForm} />
      </div>
    </form>
  );
};
const Parametre = () => {
  const dispatch = useDispatch();
  const defaultValues = useSelector(selectData);
  useEffect(() => {
    dispatch(getParametre());
  }, [dispatch]);
  
  return defaultValues ? <ParametreForm defaultValues={defaultValues} /> : null;
};

export default Parametre;
