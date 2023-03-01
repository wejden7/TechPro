import React from "react";
import { InputText } from "components/Input";
import "./FormInput.style.scss";
const FormInput = ({ useForm }) => {
  const {
    register,
    errors,
    fields,
    ajouterZone,
    remove,
    fieldsPointPreparation,
    removePointPreparation,
    ajouterPointPreparation,
  } = useForm;
  return (
    <>
      <InputText
        register={register}
        name="label"
        placeholder="Label"
        errors={errors.label?.message}
        icon="&#xf126;"
      />

      <InputText
        register={register}
        name="adresse"
        placeholder="Adresse"
        icon="&#xf3c5;"
      />
      <InputText
        register={register}
        name="tel"
        placeholder="Tel"
        icon="&#xf2a0;"
      />
      <div className="input-list">
        {fields.map((item, index) => (
          <label key={item.id} className="input-zone" htmlFor="name-group">
            <InputText
              register={register}
              name={`zones.${index}.label`}
              placeholder="Zones"
              icon="&#xf682;"
              errors={
                errors?.zones
                  ? errors.zones[index]
                    ? errors.zones[index].label?.message
                    : ""
                  : ""
              }
            />

            {fields.length > 1 && (
              <span type="button" onClick={() => remove(index)}></span>
            )}
          </label>
        ))}
        <button type="button" className="btn-icon" onClick={ajouterZone} >Ajout Zone</button>
      </div>
      <div className="input-list">
        {fieldsPointPreparation.map((item, index) => (
          <label key={item.id} className="input-zone" htmlFor="name-group">
            <InputText
              register={register}
              name={`pointPreparation.${index}.label`}
              placeholder="Point Preparation"
              icon="&#xf682;"
              errors={
                errors?.pointPreparation
                  ? errors.pointPreparation[index]
                    ? errors.pointPreparation[index].label?.message
                    : ""
                  : ""
              }
            />

            {fieldsPointPreparation.length > 1 && (
              <span
                type="button"
                onClick={() => removePointPreparation(index)}
              ></span>
            )}
          </label>
        ))}
        <button
          type="button"
          className="btn-icon"
          onClick={ajouterPointPreparation}
        >Ajout Point Preparation</button>
      </div>
    </>
  );
};

export default FormInput;
