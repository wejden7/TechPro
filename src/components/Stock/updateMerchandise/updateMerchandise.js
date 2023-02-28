import React from "react";
import ModelForm from "components/Modal/FormModel";
import { Input } from "components";
import useMerchandise from "Hooks/UseMerchandise";
import { unit } from "utils/Data/Data";
import style from "./updateMerchandise.module.scss";
import { Submit } from "components/Button/Button";

const Form = ({ item, close }) => {
  const { register, control, onSubmit, errors, isSubmitting, error, success } =
    useMerchandise(item);
  React.useEffect(() => {
    if (success) close();
  }, [success]);
  return (
    <form onSubmit={onSubmit} className={style.form}>
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

const UpdateMerchandise = ({ item }) => {
  return (
    <ModelForm
      titel="Update Merchandise"
      btnContent=""
      btnClass={`${style.btnUpdate} btn-action`}
    >
      <Form item={item} />
    </ModelForm>
  );
};

export default UpdateMerchandise;
