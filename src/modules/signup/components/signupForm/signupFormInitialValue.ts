import signupFormModel from "./signupFormModel";
import { CreateSession } from "../../../../application/models/AuthModels";

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

const signupFormInitialValue = {
  [firstName.name]: firstName.initialValue,
  [lastName.name]: lastName.initialValue,
  [userEmail.name]: userEmail.initialValue,
  [recoveryEmail.name]: recoveryEmail.initialValue,
  [phone.name]: phone.initialValue,
  [userType.name]: userType.initialValue,
  [address.name]: address.initialValue,
  // [city.name]: city.initialValue,
  // [country.name]: country.initialValue,
  // [postCode.name]: postCode.initialValue,
  [password.name]: password.initialValue,
  [confirmPassword.name]: confirmPassword.initialValue,
};

export default signupFormInitialValue;
