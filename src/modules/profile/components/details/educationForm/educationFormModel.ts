const educationFormModel = {
  formId: "quarryForm",
  formField: {
    organizationName: {
      name: "organizationName",
      label: "Organization Name",
      initialValue: "",
      requiredErrorMsg: "Organization Name is required.",
    },
    address: {
      name: "",
      label: "",
      initialValue: {},
      requiredErrorMsg: "Address is required.",
    },
    type: {
      name: "type",
      label: "Type",
      initialValue: "",
      requiredErrorMsg: "Type is required.",
    },
    fieldName: {
      name: "fieldName",
      label: "Field Name",
      initialValue: "",
      requiredErrorMsg: "Field Name is required.",
    },
    courseName: {
      name: "courseName",
      label: "Course Name",
      initialValue: "",
      requiredErrorMsg: "Course Name is required.",
    },
    description: {
      name: "description",
      label: "Description",
      initialValue: "",
      requiredErrorMsg: "Description is required.",
    },
    // user: {
    //   name: "",
    //   label: "",
    //   initialValue: "",
    //   requiredErrorMsg: " is required.",
    // },
  },
};

export default educationFormModel;
