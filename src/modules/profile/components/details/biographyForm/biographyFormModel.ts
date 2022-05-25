const biographyFormModel = {
  formId: "quarryForm",
  formField: {
    firstName: {
      name: "firstName",
      label: "First Name",
      initialValue: "",
      requiredErrorMsg: "First Name is required.",
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      initialValue: "",
      requiredErrorMsg: "Last Name is required.",
    },
    company: {
      name: "company",
      label: "Company",
      initialValue: {
        name: "",
        description: "",
        address: {
          address: "",
          city: "",
          country: "",
          postCode: "",
        },
      },
      requiredErrorMsg: "Company Name is required.",
    },
    jobRole: {
      name: "jobRole",
      label: "Job Role",
      initialValue: "",
      requiredErrorMsg: "Job Role is required.",
    },
    image: {
      name: "image",
      label: "Image",
      initialValue: "",
      requiredErrorMsg: "Image is required.",
    },
  },
};

export default biographyFormModel;
