import React from "react";
import { Input, Buttons } from "components";
import useDestroyMerchandise from "Hooks/UseDestroyMerchandise";
import { UseStateContextData } from "context/contextProvideData";

import style from "./Form.module.scss";

const Form = ({ id }) => {
  const { data, reset } = UseStateContextData();
  const { register, onSubmit, errors, isSubmitting, success } =
    useDestroyMerchandise(id, data);
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
      <Input.InputText
        register={register}
        name="comment"
        icon="&#xf4ad;"
        errors={errors.comment?.message}
        placeholder="Comment"
      />
      <Buttons.Submit
        value={data ? "update" : "save"}
        isSubmitting={isSubmitting}
      />
    </form>
  );
};

export default Form;
