import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { paieApi } from "utils/apis/parametre.api";
const validationSchema = Yup.object().shape({});

export default function useFormPaie(data) {
  const formOption = {
    resolver: yupResolver(validationSchema),
    defaultValues: data,
  };
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const { register, handleSubmit, formState, reset } = useForm(formOption);
  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await paieApi(data)
      .then((r) => {
        console.log(r)
        console.log(r.data)
        setResult(r.data);
      })
      .catch((e) => {
        console.log(e)
        setError(e);
      });
  });

  return { register, onSubmit, errors, isSubmitting, error, result };
}
