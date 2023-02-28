import React from "react";

import { InputText } from "components/Input";

const Bonus = ({ useForm }) => {
  const { register, errors, bonusFileds, ajouterBonus, BonusREmove } = useForm;
  return (
    <>
      <div className="titel-section">
        <h1>Bonus </h1>
        <button type="button" className="btn" onClick={ajouterBonus}>
          Add New
        </button>
      </div>

      {bonusFileds.map((item, index) => (
        <div className="section-3" key={item.id}>
          <InputText
            register={register}
            name={`bonus.${index}.label`}
            placeholder="label"
            icon="&#xf682;"
            errors={
              errors?.bonus
                ? errors.bonus[index]
                  ? errors.bonus[index].label?.message
                  : ""
                : ""
            }
          />

          <InputText
            register={register}
            name={`bonus.${index}.amount`}
            placeholder="amount"
            icon="&#xf682;"
            errors={
              errors?.bonus
                ? errors.bonus[index]
                  ? errors.bonus[index].amount?.message
                  : ""
                : ""
            }
          />
          <button className="btn " onClick={() => BonusREmove(index)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
export default Bonus;
