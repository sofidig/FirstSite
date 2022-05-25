import * as yup from "yup";
import educationFormModel from "./educationFormModel";

const {
  formField: {
    organizationName,
    address,
    type,
    fieldName,
    courseName,
    // duration,
    description,
  },
} = educationFormModel;

const educationFormvalidationSchema = yup.object().shape({
  [organizationName.name]: yup.string().required("Company Name is Required"),
  [address.name]: yup.object().shape({}),
  [type.name]: yup.string().required("Type is Required"),
  [fieldName.name]: yup.string().required("Field Name is Required"),
  [courseName.name]: yup.string().required("Course Name is Required"),
  //   [duration.name]: yup.object().shape({}),
  [description.name]: yup.string().required("Description is Required"),
});

export default educationFormvalidationSchema;
