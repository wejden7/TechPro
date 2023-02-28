import React from "react";
import RetenueFor from "./RetenueFor";
import { forRetenue, categorieRetenue } from "utils/Data/Data";
import { InputText, InputSelectLabel } from "components/Input";

const Retenue = ({ useForm }) => {
  const {
    control,
    register,
    errors,
    retenueFildes,
    ajouterRetenue,
    retenueRemove,
    retenueArray,
  } = useForm;
  return (
    <>
      <div className="titel-section">
        <h1>Retenue </h1>
        <button type="button" className="btn" onClick={ajouterRetenue}>
          Add New
        </button>
      </div>

      {retenueFildes.map((item, index) => (
        <div className="section-3" key={item.id}>
          <InputText
            register={register}
            name={`retenue.${index}.label`}
            placeholder="label"
            icon="&#xf682;"
            errors={
              errors?.retenue
                ? errors.retenue[index]
                  ? errors.retenue[index].label?.message
                  : ""
                : ""
            }
          />
          <InputSelectLabel
            control={control}
            name={`retenue.${index}.categaure`}
            data={categorieRetenue}
            placeholder="Select categaure"
            icon="&#xf682;"
            errors={
              errors?.retenue
                ? errors.retenue[index]
                  ? errors.retenue[index].categaure?.message
                  : ""
                : ""
            }
          />
          <InputSelectLabel
            control={control}
            name={`retenue.${index}.retenuFor`}
            data={forRetenue}
            placeholder="Select retenuFor"
            icon="&#xf682;"
            errors={
              errors?.retenue
                ? errors.retenue[index]
                  ? errors.retenue[index].retenuFor?.message
                  : ""
                : ""
            }
          />
          {(retenueArray[index].retenuFor === "salarial" ||
            retenueArray[index].retenuFor === "all") && (
            <RetenueFor
              register={register}
              index={index}
              for_que={"salarial"}
              errors={errors}
            />
          )}
          {(retenueArray[index].retenuFor === "employer" ||
            retenueArray[index].retenuFor === "all") && (
            <RetenueFor
              register={register}
              index={index}
              for_que={"employer"}
              errors={errors}
            />
          )}

          <button
            className="btn btn-retenue "
            onClick={() => retenueRemove(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
export default Retenue;
