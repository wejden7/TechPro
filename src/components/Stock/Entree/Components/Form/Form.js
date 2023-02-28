import React from "react";
import { Input, Buttons } from "components";
import useEntreeMerchandise from "Hooks/useEntreeMerchandise";
import { UseStateContextData } from "context/contextProvideData";

import style from "./Form.module.scss";

const Form = ({ id }) => {
  const { data, reset } = UseStateContextData();
  const { register, onSubmit, errors, isSubmitting, success } =
    useEntreeMerchandise(id, data);

  React.useEffect(() => {
    if (data) reset();
  }, [success]);

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <Input.InputText
        register={register}
        name="count"
        icon="&#xf1ec;"
        errors={errors.count?.message}
        placeholder="Count"
      />

      <label className={style.switch}>
        <input type="checkbox" {...register("priceUnit")} />
        <span className={style.slider}></span>
        <span className={`${style.select} ${style.one}`}>Price Totale</span>
        <span className={`${style.select} ${style.tow}`}>Price Unit</span>
      </label>

      <Input.InputText
        register={register}
        name="price"
        icon="&#x24;"
        errors={errors.price?.message}
        placeholder="price"
      />

      <Buttons.Submit
        value={data ? "update" : "save"}
        isSubmitting={isSubmitting}
      />
    </form>
  );
};

export default Form;
