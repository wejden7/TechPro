import React from "react";
import ModelForm from "components/Modal/FormModel";
import { Form, List } from "./components";
import { ContextProviderData } from "context/contextProvideData";

import styles from "./DestroyMerchandise.module.scss";

const Body = ({ id }) => {
  return (
    <div className={`box-max`}>
      <Form id={id} />
      <List id={id} />
    </div>
  );
};
const DestroyMerchandise = ({ id }) => {
  return (
    <ContextProviderData>
      <ModelForm
        titel="Destroy Merchandise"
        btnContent="Destroy"
        btnClass={`${styles.btn} btn-operation`}
      >
        <Body id={id} />
      </ModelForm>
    </ContextProviderData>
  );
};
export default DestroyMerchandise;
