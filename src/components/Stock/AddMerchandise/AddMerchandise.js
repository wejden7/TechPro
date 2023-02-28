import React from "react";
import { Input } from "components";
import { unit } from "utils/Data/Data";
import ModelForm from "components/Modal/FormModel";
import useMerchandise from "Hooks/UseMerchandise";
import { Submit } from "components/Button/Button";

import  styles from "./AddMerchandise.module.scss";


const Form = () => {
  const { register, control, onSubmit, errors, isSubmitting, error, success } =
    useMerchandise();
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input.InputText
        register={register}
        name="label"
        errors={errors.label?.message}
        icon="&#xf54e;"
        placeholder="Label"
      />
      <Input.InputSelectLabel
        control={control}
        name="unit"
        data={unit}
        placeholder="select unit"
        errors={errors.unit?.message}
      />
      <Submit value="save" isSubmitting={isSubmitting} />
    </form>
  );
};
const AddMerchandise = () => {

  return (
    <ModelForm
      titel="New Merchandise"
      btnContent=""
      btnClass={styles.btn}
    >
      <Form />
    </ModelForm>
  );
};

export default AddMerchandise;
