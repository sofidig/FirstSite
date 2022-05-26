import React, { useEffect, useRef } from "react";
import { Formik, Form, FormikValues, FormikProps, FormikHelpers } from "formik";
import TextField from "../../../../shared/formFields/TextField";
import { CancelButton, SaveButton } from "../../../../shared/Button";
import UserApi from "../../../../apis/UserApi";
import { EducationalDetail } from "../../../../application/models/EducationDetailModels";
import educationFormModel from "../details/educationForm/educationFormModel";
import { HiTrash } from "react-icons/hi";
import EducationApi from "../../../../apis/EducationApi";
import AddressField from "../../../../shared/formFields/AddressField";
import educationFormInitialValue from "../details/educationForm/educationFormInitialValue";
import educationFormvalidationSchema from "../details/educationForm/educationFormValidation";

const EducationForm = ({
  education,
  setShowModal,
}: {
  education: any;
  setShowModal: (v: boolean) => void;
}) => {
  const formikRef = useRef<FormikProps<EducationalDetail>>(null);

  const {
    formField: {
      organizationName,
      address,
      type,
      fieldName,
      courseName,
      description,
    },
  } = educationFormModel;

  const handleSubmit = async (
    values: EducationalDetail,
    actions: FormikHelpers<EducationalDetail>
  ) => {
    try {
      if (!education) {
        const data = await UserApi.addEducationalAsync(values);
        console.log(data);
      } else {
        const data = await EducationApi.updateEducationAsync(
          education._id!,
          values
        );
      }

      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteData = async () => {
    if (education) {
      await EducationApi.deleteEducationAsync(education._id!);
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.setFieldValue(
        "courseName",
        education?.courseName ?? ""
      );
      formikRef.current.setFieldValue(
        "description",
        education?.description ?? ""
      );
      formikRef.current.setFieldValue("fieldName", education?.fieldName ?? "");
      formikRef.current.setFieldValue("type", education?.type ?? "");
      formikRef.current.setFieldValue(
        "organizationName",
        education?.organizationName ?? ""
      );

      formikRef.current.setFieldValue(
        "address",
        education?.address ?? address.initialValue
      );
    }
  }, [education]);

  return (
    <div>
      {" "}
      <Formik
        innerRef={formikRef}
        initialValues={educationFormInitialValue}
        onSubmit={handleSubmit}
        validationSchema={educationFormvalidationSchema}
      >
        {(formik) => (
          <div className="bg-white px-20 py-10 shadow-lg rounded-lg">
            <Form>
              <TextField
                label={organizationName.label}
                name={organizationName.name}
                type="text"
              />
              <AddressField name={address.name} />

              <TextField label={type.label} name={type.name} type="text" />
              <TextField
                label={fieldName.label}
                name={fieldName.name}
                type="text"
              />
              <TextField
                label={courseName.label}
                name={courseName.name}
                type="text"
              />
              <TextField
                label={description.label}
                name={description.name}
                type="text"
              />

              {/* <TextField
          label={duration.label}
          name={duration.name}
          type="text"
        /> */}
              <HiTrash
                className="h-8 w-8 cursor-pointer"
                onClick={deleteData}
              />

              <div className="space-x-4">
                <SaveButton />
                <span onClick={() => setShowModal(false)}>
                  <CancelButton />
                </span>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EducationForm;
