import React from "react";
import { InputText } from "components/Input";
const RetenueFor = ({ register, index, for_que, errors }) => {
  console.log(errors);
  console.log(index);
  return (
    <div className="retenue-for">
      <h1>{for_que}</h1>
      <InputText
        register={register}
        name={`retenue.${index}.${for_que}.taux`}
        placeholder="taux"
        icon="&#xf682;"
        errors={
          errors?.retenue
            ? errors.retenue[index] &&
              errors.retenue[index][for_que] &&
              Object.keys(errors.retenue[index][for_que]).length === 3
              ? errors.retenue[index][for_que].taux?.message
              : ""
            : ""
        }
      />

      <InputText
        register={register}
        name={`retenue.${index}.${for_que}.amount`}
        placeholder="amount"
        icon="&#xf682;"
        errors={
          errors?.retenue
            ? errors.retenue[index] &&
              errors.retenue[index][for_que] &&
              Object.keys(errors.retenue[index][for_que]).length === 3
              ? errors.retenue[index][for_que].amount?.message
              : ""
            : ""
        }
      />
      <InputText
        register={register}
        name={`retenue.${index}.${for_que}.formul`}
        placeholder="formul"
        icon="&#xf682;"
        errors={
          errors?.retenue
            ? errors.retenue[index] &&
              errors.retenue[index][for_que] &&
              Object.keys(errors.retenue[index][for_que]).length === 3
              ? errors.retenue[index][for_que].formul?.message
              : ""
            : ""
        }
      />
    </div>
  );
};
export default RetenueFor;
