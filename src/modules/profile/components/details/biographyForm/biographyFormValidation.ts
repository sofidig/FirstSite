import * as yup from "yup";
import biographyFormModel from "./biographyFormModel";

const {
  formField: {
    firstName,
    lastName,
    address,
    // company, jobRole, image
  },
} = biographyFormModel;

const biographyFormvalidationSchema = yup.object().shape({
  [firstName.name]: yup.string().required("FirstName is Required"),
  [lastName.name]: yup.string().required("LastName is Required"),
  [address.name]: yup.object().shape({}),
  // [company.name]: yup.object().shape({}),
  // [jobRole.name]: yup.string().required("JobRole is Required"),
  // [image.name]: yup.string().required("Image is Required"),
});

export default biographyFormvalidationSchema;
