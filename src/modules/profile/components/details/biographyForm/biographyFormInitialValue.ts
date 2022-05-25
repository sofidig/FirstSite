import { Biography } from "../../../../../application/models/BiographyModels";

const biographyFormInitialValue = {
  firstName: "",
  lastName: "",
  company: {
    name: "",
    description: "",
    address: {
      address: "",
      city: "",
      country: "",
      postCode: "",
    },
    jobRole: "",
    // address: {
    //   address: "",
    //   city: "",
    //   country: "",
    //   postCode: "",
    // },
    image: "",
  },
} as Biography;

export default biographyFormInitialValue;
