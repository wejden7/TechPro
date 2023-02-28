import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { login } from "state/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is reqired"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "should be 8 chars minimum. "),
});

const user = {
  email: "",
  password: "",
  auth: "admin",
};
const formOption = {
  resolver: yupResolver(validationSchema),
  defaultValues: user,
};
export default function useLogin() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm(formOption);
  const { errors, isSubmitting } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault();
    await dispatch(login(data))
      .unwrap()
      .then((resualt) => {
        console.log(resualt);
        navigate("/");
        setSuccess(true);
        reset();
        setError(null);
      })
      .catch((e) => { 
        const error = JSON.parse(e.message);
        console.log("n", error);
          setError(error?.error[0]?.msg||error.error);
      });
  });

  return { register, onSubmit, errors, isSubmitting, error, success };
}
