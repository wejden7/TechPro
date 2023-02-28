import React, { useState } from "react";
import { useDispatch } from "react-redux";

//* import react hook from and yup
import { useForm, useFieldArray } from "react-hook-form";

//* import from state
import { updateParametre } from "state/ParametreSlice";

//* import yup validation
import resolver from "utils/Yup/YupFormParametre";

export default function useFormParametre(defaultValues) {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const option = { resolver, defaultValues };
  const { register, control, handleSubmit, formState, watch } = useForm(option);
  const { errors, isSubmitting } = formState;
  const useFieldBonus = { control, name: "bonus" };
  const useFieldRetenue = { control, name: "retenue" };
  const retenueArray = watch("retenue");
  const {
    fields: bonusFileds,
    append: bonusAppend,
    remove: BonusREmove,
  } = useFieldArray(useFieldBonus);
  const {
    fields: retenueFildes,
    append: retenueAppend,
    remove: retenueRemove,
  } = useFieldArray(useFieldRetenue);

  const ajouterBonus = () => bonusAppend({ label: "", amount: null });

  const ajouterRetenue = () =>
    retenueAppend({ label: "", retenuFor: "-1", categaure: -1 });

  //* function si onSubmit
  const dataTransforme = (data) => {
    const { retenue } = data;
    retenue.map((item) => {
      if (item.retenuFor === "salarial") item.employer = null;
      if (item.retenuFor === "employer") item.salarial = null;
      return item;
    });
    return data;
  };

  const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault();
    data = dataTransforme(data);

    await dispatch(updateParametre(data))
      .unwrap()
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  });

  return {
    register,
    onSubmit,
    control,
    errors,
    isSubmitting,
    error,
    bonusFileds,
    ajouterBonus,
    BonusREmove,
    retenueFildes,
    ajouterRetenue,
    retenueRemove,
    retenueArray,
  };
}
