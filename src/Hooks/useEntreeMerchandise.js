import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  createEntreeMerchandise,
  updateEntreeMerchandise,
} from "state/entreeStockSlice";
const validationSchema = Yup.object().shape({
  count: Yup.number().typeError("Count is a decimale"),
  price: Yup.number().typeError("price is a decimale"),
});

export default function useEntreeMerchandise(merchandise, defaultValues) {
  const formOption = {
    resolver: yupResolver(validationSchema),
  };
  React.useEffect(() => {
    console.log("defaultValues", defaultValues);
    if (defaultValues) setDefaultValues();
  }, [defaultValues?._id]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState, reset, control, setValue } =
    useForm(formOption);
  const { errors, isSubmitting } = formState;
  const dispatch = useDispatch();

  const setDefaultValues = () => {
    setValue("count", defaultValues.count);
    setValue("price", defaultValues.priceTotale);
    setValue("_id", defaultValues._id);
    setValue("id", defaultValues.id);
  };
  const create = async (data) => {
    await dispatch(createEntreeMerchandise(data))
      .unwrap()
      .then((resualt) => {
        console.log(resualt);
        setSuccess(true);
        reset();
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const update = async (data) => {
    await dispatch(updateEntreeMerchandise(data))
      .unwrap()
      .then((resualt) => {
        console.log(resualt);
        setSuccess(true);
        reset();
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault();
    const newData = { merchandise, entree: data };
    console.log(newData);
    defaultValues ? await update(newData) : await create(newData);
  });

  return { register, control, onSubmit, errors, isSubmitting, error, success };
}
