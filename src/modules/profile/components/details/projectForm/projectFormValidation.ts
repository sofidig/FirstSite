import * as yup from "yup";
import projectFormModel from "./projectFormModel";

const {
  formField: { name, category, description, images, skills },
} = projectFormModel;

const projectFormvalidationSchema = yup.object().shape({
  [name.name]: yup.string().required("Name is Required"),
  [category.name]: yup.string().required("Category is Required"),
  [description.name]: yup.string().required("Description is Required"),
  [images.name]: yup.string().required("Images is Required"),
  [skills.name]: yup.string().required("Skills is Required"),
});

export default projectFormvalidationSchema;
