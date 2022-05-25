import { EducationalDetail } from "../../../../../application/models/EducationDetailModels";

const educationFormInitialValue = {
  organizationName: "",
  address: {
    address: "",
    city: "",
    country: "",
    postCode: "",
  },
  duration: {},
  type: "",
  fieldName: "",
  courseName: "",
  description: "",
} as EducationalDetail;

export default educationFormInitialValue;
