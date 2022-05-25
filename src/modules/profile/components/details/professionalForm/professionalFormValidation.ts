import * as yup from "yup";
import professionalFormModel from "./professionalFormModel";

const {
  formField: { company, jobRole, duration },
} = professionalFormModel;

const professionalFormvalidationSchema = yup.object().shape({
  [company.name]: yup.object().shape({
    name: yup.string().required("Company Name is Required"),
    description: yup.string().required("Company Description is Required"),
    address: yup.object().shape({
      address: yup.string().required("Company Address is Required"),
      city: yup.string().required("Company City is Required"),
      country: yup.string().required("Company Country is Required"),
      postCode: yup.string().required("Company PostCode is Required"),
    }),
  }),
  [jobRole.name]: yup.string().required(jobRole.requiredErrorMsg),
  [duration.name]: yup.object().shape({}),
});

export default professionalFormvalidationSchema;
