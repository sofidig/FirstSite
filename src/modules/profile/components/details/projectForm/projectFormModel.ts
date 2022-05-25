const projectFormModel = {
  formId: "quarryForm",
  formField: {
    name: {
      name: "name",
      label: "Project Name",
      initialValue: "",
      requiredErrorMsg: "Project Name is required.",
    },
    category: {
      name: "category",
      label: "Category",
      initialValue: "",
      requiredErrorMsg: "Category is required",
    },
    description: {
      name: "description",
      label: "Description",
      initialValue: "",
      requiredErrorMsg: "Description is required",
    },
    duration: {
      name: "duration",
      label: "Duration",
      initialValue: {},
      requiredErrorMsg: "Duration is required",
    },
    images: {
      name: "images",
      label: "Images",
      initialValue: "",
      requiredErrorMsg: "Images is required",
    },
    skills: {
      name: "skills",
      label: "Skills",
      initialValue: "",
      requiredErrorMsg: "Skills is required",
    },
  },
};

export default projectFormModel;
