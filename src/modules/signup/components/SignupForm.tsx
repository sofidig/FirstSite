import React from "react";
import { Formik, Form, FormikValues, FormikHelpers } from "formik";
import TextField from "../../../shared/formFields/TextField";
import signupFormModel from "./signupForm/signupFormModel";
import signupFormvalidationSchema from "./signupForm/signupFormValidation";
import signupFormInitialValue from "./signupForm/signupFormInitialValue";
import { SaveButton, CancelButton } from "../../../shared/Button";
import UserApi from "../../../apis/UserApi";
import { CreateUser } from "../../../application/models/AuthModels";
import { setAuthHeader } from "../../../apis/AxiosInstance";
import AddressField from "../../../shared/formFields/AddressField";

const {
  formField: {
    firstName,
    lastName,
    userEmail,
    recoveryEmail,
    phone,
    userType,
    address,
    city,
    country,
    postCode,
    password,
    confirmPassword,
  },
} = signupFormModel;

const SignupForm = () => {
  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    try {
      let data = { ...values };
      const res = await UserApi.createUserAsync(data as CreateUser);
      // localStorage.setItem("refresh-token", JSON.stringify(res.refreshToken));
      // setAuthHeader(res.accessToken);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col mx-auto">
      <h1 className="text-4xl text-center text-red-600 font-bold my-10 ">
        SignUp Now
      </h1>
      <Formik
        initialValues={signupFormInitialValue}
        onSubmit={handleSubmit}
        validationSchema={signupFormvalidationSchema}
      >
        {(formik) => (
          <div className="flex flex-col mx-auto mb-10 bg-white px-20  py-10 shadow-lg rounded-lg">
            <Form className="flex flex-col  mx-auto space-y-8">
              <TextField
                label={firstName.label}
                name={firstName.name}
                type="text"
              />
              <TextField
                label={lastName.label}
                name={lastName.name}
                type="text"
              />
              <TextField
                label={userEmail.label}
                name={userEmail.name}
                type="email"
              />
              <TextField
                label={recoveryEmail.label}
                name={recoveryEmail.name}
                type="email"
              />
              <TextField label={phone.label} name={phone.name} type="tel" />
              <TextField
                label={userType.label}
                name={userType.name}
                type="text"
              />

              <AddressField name={address.name} />

              {/* <TextField
                label={address.label}
                name={address.name}
                type="text"
              />
              <TextField label={city.label} name={city.name} type="text" />
              <TextField
                label={country.label}
                name={country.name}
                type="text"
              />
              <TextField
                label={postCode.label}
                name={postCode.name}
                type="text"
              /> */}

              <TextField
                label={password.label}
                name={password.name}
                type="password"
              />
              <TextField
                label={confirmPassword.label}
                name={confirmPassword.name}
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

export default SignupForm;
