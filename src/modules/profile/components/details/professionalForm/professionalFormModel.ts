const professionalFormModel = {
  formId: "quarryForm",
  formField: {
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
    duration: {
      name: "duration",
      label: "Duration",
      initialValue: {
        startDate: "",
        endDate: "",
      },
      requiredErrorMsg: "Duration is required.",
    },
  },
};

export default professionalFormModel;
