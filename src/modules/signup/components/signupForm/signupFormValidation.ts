import * as yup from "yup";
import signupFormModel from "./signupFormModel";

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

const signupFormvalidationSchema = yup.object().shape({
  [firstName.name]: yup.string().required(firstName.requiredErrorMsg),
  [lastName.name]: yup.string().required(lastName.requiredErrorMsg),
  [userEmail.name]: yup
    .string()
    .email("Must be a valid email")
    .required(userEmail.requiredErrorMsg),
  [recoveryEmail.name]: yup
    .string()
    .email("Must be a valid email")
    .required(recoveryEmail.requiredErrorMsg),
  [phone.name]: yup.number().required(phone.requiredErrorMsg),
  [userType.name]: yup.string().required(userType.requiredErrorMsg),
  [address.name]: yup.string().required(address.requiredErrorMsg),
  [city.name]: yup.string().required(city.requiredErrorMsg),
  [country.name]: yup.string().required(country.requiredErrorMsg),
  [postCode.name]: yup.string().required(postCode.requiredErrorMsg),
  [password.name]: yup
    .string()
    .required(password.requiredErrorMsg)
    .min(6, password.minCharacterError)
    .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
  [confirmPassword.name]: yup
    .string()
    .required("Required")
    .test("password-match", "Password musth match", function (value) {
      return this.parent.password === value;
    }),
});

export default signupFormvalidationSchema;
