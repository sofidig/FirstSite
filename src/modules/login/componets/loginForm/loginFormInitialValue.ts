import loginFormModel from "./loginFormModel";
import { CreateSession } from "../../../../application/models/AuthModels";

const {
  formField: { email, password },
} = loginFormModel;

const loginFormInitialValue = {
  [email.name]: email.initialValue,
  [password.name]: password.initialValue,
};

export default loginFormInitialValue;
