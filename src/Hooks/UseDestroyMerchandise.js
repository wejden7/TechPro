import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createDestroyMerchandise,updateDestroyMerchandise } from "state/DestroyStockSlice.js";
const validationSchema = Yup.object().shape({
  count: Yup.number().typeError("Count is a decimale"),
});

export default function useDestroyMerchandise(merchandise, defaultValues) {
  const formOption = {
    resolver: yupResolver(validationSchema),
  };
  React.useEffect(() => {
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
    setValue("comment", defaultValues.comment);
    setValue("_id", defaultValues._id);
  };
  const create = async (data) => {
    const newData = { merchandise, data };
    await dispatch(createDestroyMerchandise(newData))
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
    await dispatch(updateDestroyMerchandise({id: defaultValues.id,data}))
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
    defaultValues ? await update(data) : await create(data);
  });

  return { register, control, onSubmit, errors, isSubmitting, error, success };
}
