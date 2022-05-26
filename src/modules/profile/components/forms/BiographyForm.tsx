import React, { useEffect, useRef } from "react";
import { Formik, Form, FormikValues, FormikProps, FormikHelpers } from "formik";
import TextField from "../../../../shared/formFields/TextField";
import { CancelButton, SaveButton } from "../../../../shared/Button";
import UserApi from "../../../../apis/UserApi";
import { Biography } from "../../../../application/models/BiographyModels";
import biographyFormModel from "../details/biographyForm/biographyFormModel";
import biographyFormInitialValue from "../details/biographyForm/biographyFormInitialValue";
import biographyFormvalidationSchema from "../details/biographyForm/biographyFormValidation";
import AddressField from "../../../../shared/formFields/AddressField";

const BiographyForm = ({
  biography,
  setShowModal,
}: {
  biography: any;
  setShowModal: (v: boolean) => void;
}) => {
  const formikRef = useRef<FormikProps<Biography>>(null);

  const {
    formField: { firstName, lastName, address },
  } = biographyFormModel;

  const handleSubmit = async (
    values: Biography,
    actions: FormikHelpers<Biography>
  ) => {
    try {
      if (!biography) {
        const data = await UserApi.updateBiographyAsync(values);
        console.log(data);
      } else {
        // const data = await UserApi.updateBiographyAsync(biography._id!, values);
      }

      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.setFieldValue("firstName", biography?.firstName ?? "");
      formikRef.current.setFieldValue("lastName", biography?.lastName ?? "");

      formikRef.current.setFieldValue(
        "address",
        biography?.address ?? address.initialValue
      );
    }
  }, [biography]);

  return (
    <div>
      {" "}
      <Formik
        innerRef={formikRef}
        initialValues={biographyFormInitialValue}
        onSubmit={handleSubmit}
        validationSchema={biographyFormvalidationSchema}
      >
        {(formik) => (
          <div className="bg-white px-20 py-10 shadow-lg rounded-lg">
            <Form>
              <TextField
                label={firstName.label}
                name={firstName.name}
                type="text"
              />
              <TextField
                label={lastName.label}
                name={lastName.name}
                type="text"
              />

              <AddressField name={address.name} />

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

export default BiographyForm;
