import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { creatMerchandise, updateMerchandise } from "state/StockSlice";
const validationSchema = Yup.object().shape({
  label: Yup.string().required("Label  is reqired"),
  unit: Yup.string().not(["-1"], "Unit is reqired"),
});

export default function useMerchandise(defaultValues) {
  const formOption = {
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues ? defaultValues : { label: "", unit: "-1" },
  };

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState, reset, control } =
    useForm(formOption);
  const { errors, isSubmitting } = formState;
  const dispatch = useDispatch();

  const create = async (data) => {
    await dispatch(creatMerchandise(data))
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
    await dispatch(updateMerchandise(data))
      .unwrap()
      .then((resualt) => {
        console.log(resualt);
        setSuccess(true);
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
