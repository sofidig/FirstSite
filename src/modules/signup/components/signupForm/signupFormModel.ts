const signupFormModel = {
  formId: "quarryForm",
  formField: {
    firstName: {
      name: "firstname",
      label: "First Name",
      initialValue: "",
      requiredErrorMsg: "First Name is required.",
    },
    lastName: {
      name: "lastname",
      label: "Last Name",
      initialValue: "",
      requiredErrorMsg: "Last Name is required.",
    },
    userEmail: {
      name: "useremail",
      label: "User Email",
      initialValue: "",
      requiredErrorMsg: "User Email is required.",
    },
    recoveryEmail: {
      name: "recoveryemail",
      label: "Recovery Email",
      initialValue: "",
      requiredErrorMsg: "Recovery Email is required.",
    },
    phone: {
      name: "phone",
      label: "Phone",
      initialValue: "",
      requiredErrorMsg: "Phone is required.",
    },
    userType: {
      name: "usertype",
      label: "User Type",
      initialValue: "",
      requiredErrorMsg: "User Type is required.",
    },
    address: {
      name: "address",
      label: "Address",
      initialValue: {
        address: "",
        city: "",
        country: "",
        postcode: "",
      },
      requiredErrorMsg: "Address is required.",
    },
    city: {
      name: "city",
      label: "City",
      initialValue: "",
      requiredErrorMsg: "City is required.",
    },
    country: {
      name: "country",
      label: "Country",
      initialValue: "",
      requiredErrorMsg: "Country is required.",
    },
    postCode: {
      name: "postcode",
      label: "Post Code",
      initialValue: "",
      requiredErrorMsg: "Post Code is required.",
    },
    password: {
      name: "password",
      label: "Password",
      initialValue: "",
      requiredErrorMsg: "Password is required.",
      minCharacterError: "Password is too short - should be 6 chars minimum.",
    },
    confirmPassword: {
      name: "confirmpassword",
      label: "Confirm Password",
      initialValue: "",
      requiredErrorMsg: "Confirm Password is required.",
      minCharacterError: "Password Need to Match",
    },
  },
};

export default signupFormModel;
