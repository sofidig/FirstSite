import { ProfessionalDetail } from "../../../../../application/models/ProfessionalDetailModels";
import professionalFormModel from "./professionalFormModel";

const professionalFormInitialValue = {
  jobRole: "",
  company: {
    name: "",
    description: "",
    address: {
      address: "",
      city: "",
      country: "",
      postCode: "",
    },
  },
  duration: {
    // startDate: "",
    // endDate: "",
  },
} as ProfessionalDetail;

export default professionalFormInitialValue;
