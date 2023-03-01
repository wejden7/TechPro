import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { ajouterBranche, updateBranche } from "state/SettingSlice";

const validationSchema = Yup.object().shape({
  label: Yup.string().required("Branche is reqired"),
  zones: Yup.array(
    Yup.object({ label: Yup.string().required("label reqired") })
  )
    .required("Must have fields")
    .min(1, "Minimum of 1 field"),
  pointPreparation: Yup.array(
    Yup.object({ label: Yup.string().required("point Preparation is reqired") })
  )
    .required("Must have fields")
    .min(1, "Minimum of 1 field"),
});

export default function useBranche(data, update) {
  let option = {
    resolver: yupResolver(validationSchema),
    defaultValues: data,
  };
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { register, control, handleSubmit, formState, reset } = useForm(option);
  const useFieldParameters = { control, name: "zones" };
  const useFieldPointPreparation = { control, name: "pointPreparation" };
  const { fields, append, remove } = useFieldArray(useFieldParameters);
  const {
    fields: fieldsPointPreparation,
    append: appendPointPreparation,
    remove: removePointPreparation,
  } = useFieldArray(useFieldPointPreparation);
  const { errors, isSubmitting } = formState;

  // * function pour ajouter
  const ajouterZone = () => {
    append({ label: "" });
  };
  const ajouterPointPreparation = () => {
    appendPointPreparation({ label: "" });
  };

  //* function si onSubmit
  const dispatcheCreate = async (data) => {
    await dispatch(ajouterBranche(data))
      .unwrap()
      .then((t) => {
        reset();
        setSuccess(true);
      })
      .catch((e) => {
        setError(e);
      });
  };
  const dispatcheUpdate = async (data) => {
    await dispatch(updateBranche(data))
      .unwrap()
      .then((t) => {
        reset();
        setSuccess(true);
      })
      .catch((e) => {
        setError(e);
      });
  };
  const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault();
    console.log(data);
    !update ? await dispatcheCreate(data) : await dispatcheUpdate(data);
  });

  return {
    register,
    onSubmit,
    errors,
    isSubmitting,
    error,
    success,
    fields,
    remove,
    ajouterZone,
    fieldsPointPreparation,
    removePointPreparation,
    ajouterPointPreparation
  };
}
