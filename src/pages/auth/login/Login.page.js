import React, { useState } from "react";
import { InputAuth } from "components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useLogin from "Hooks/UseLogin";
import { registerPath, ForgetPasswordPath } from "utils/router/path.utils";
const { EmailInput, PasswordInput, SubmitInput, TextInputName } = InputAuth;

const LoginAdmin = () => {
  const { register, onSubmit, errors, isSubmitting, error, success } =
    useLogin();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      className="content"
    >
      <h1 className="title-form">Sign In</h1>
      <p className="sousTitle-form">welcome back to tacPro</p>
      <p className="error-form">{error}</p>
      <form onSubmit={onSubmit}>
        <div className="auth">
          <label className="radio">
            <input type="radio" {...register("auth")} value="admin" />
            Admin
          </label>

          <label className="radio">
            <input type="radio" {...register("auth")} value="employer" />
            Employer
          </label>
        </div>

        <EmailInput
          register={register("email")}
          error={errors.email?.message}
        />
        <PasswordInput
          register={register("password")}
          error={errors.password?.message}
        />

        <SubmitInput isSubmitting={isSubmitting} label="Sign In" />
      </form>
      <p className="have-not-account">
        Don't have an account? <Link to={registerPath}>Sign Up</Link>{" "}
      </p>
      <p className="forgot-password">
        <Link to={ForgetPasswordPath} className="forgot-password">
          Forgot password ?
        </Link>
      </p>
    </motion.div>
  );
};

function Login() {
  return (
    <AnimatePresence>
      <LoginAdmin />
    </AnimatePresence>
  );
}

export default Login;
