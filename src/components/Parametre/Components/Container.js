import React from "react";

import { InputText } from "components/Input";
const Container = ({ useForm }) => {
  const { register } = useForm;
  return (
    <div className="container">
      <div className="section">
        <label htmlFor="">Taux Majouration Heure Supp</label>
        <div className="section-1">
          <InputText
            register={register}
            name="tauxMajourationHeuresSupp.one"
            placeholder="One"
            icon="&#x25;"
          />
          <InputText
            register={register}
            name="tauxMajourationHeuresSupp.tow"
            placeholder="Tow"
            icon="&#x25;"
          />
        </div>
      </div>
      <div className="section">
        <label htmlFor="">Salary Min</label>

        <InputText
          register={register}
          name="salaryMin"
          placeholder="0"
          icon="&#x24;"
        />
      </div>
    </div>
  );
};
export default Container;
