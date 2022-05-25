import React from "react";
import { Formik, Form, FormikValues, FormikHelpers } from "formik";
import TextField from "../../../shared/formFields/TextField";
import loginFormModel from "./loginForm/loginFormModel";
import loginFormvalidationSchema from "./loginForm/loginFormValidation";
import loginFormInitialValue from "./loginForm/loginFormInitialValue";
import { SaveButton, CancelButton } from "../../../shared/Button";
import SessionApi from "../../../apis/SessionApi";
import { CreateSession } from "../../../application/models/AuthModels";
import { setAuthHeader } from "../../../apis/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../application/constants/AppRoutes";

const {
  formField: { email, password },
} = loginFormModel;

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    try {
      let data = { ...values };
      const res = await SessionApi.createSessionAsync(data as CreateSession);
      localStorage.setItem("refresh-token", JSON.stringify(res.refreshToken));
      setAuthHeader(res.accessToken);
      navigate(`/${APP_ROUTES.PROFILE}`);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col mx-auto  justify-center items-center pb-10">
      <h1 className="text-4xl text-center text-red-600 font-bold my-10 ">
        LogIn Now
      </h1>
      <Formik
        initialValues={loginFormInitialValue}
        onSubmit={handleSubmit}
        validationSchema={loginFormvalidationSchema}
      >
        {(formik) => (
          <div className="bg-white px-20 py-10 shadow-lg rounded-lg">
            <Form>
              <TextField label={email.label} name={email.name} type="email" />
              <TextField
                label={password.label}
                name={password.name}
                type="password"
              />
              <div className="space-x-4">
                <SaveButton />
                <CancelButton />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
