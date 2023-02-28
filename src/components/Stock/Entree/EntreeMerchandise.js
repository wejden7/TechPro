import React from "react";
import ModelForm from "components/Modal/FormModel";

import style from "./EntreeMerchandise.module.scss";
import { Form, List } from "./Components";
import { ContextProviderData } from "context/contextProvideData";

const Body = ({ id }) => {
  return (
    <div className={`box-max`}>
      <Form id={id} />
      <List id={id} />
    </div>
  );
};
const EntreeMerchandise = ({ id }) => {
  return (
    <ContextProviderData>
      <ModelForm
        titel="Entree Merchandise"
        btnContent="Entree"
        btnClass={`${style.btn} btn-operation`}
      >
        <Body id={id} />
      </ModelForm>
    </ContextProviderData>
  );
};
export default EntreeMerchandise;
