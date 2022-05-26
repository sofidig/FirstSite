import React, { useEffect, useRef } from "react";
import professionalFormInitialValue from "../details/professionalForm/professionalFormInitialValue";
import professionalFormModel from "../details/professionalForm/professionalFormModel";
import professionalFormvalidationSchema from "../details/professionalForm/professionalFormValidation";
import { Formik, Form, FormikValues, FormikProps, FormikHelpers } from "formik";
import TextField from "../../../../shared/formFields/TextField";
import { CancelButton, SaveButton } from "../../../../shared/Button";
import UserApi from "../../../../apis/UserApi";
import ProfessionApi from "../../../../apis/ProfessionApi";
import { ProfessionalDetail } from "../../../../application/models/ProfessionalDetailModels";
import CompanyField from "../../../../shared/formFields/CompanyField";
import { HiTrash } from "react-icons/hi";

const ProfessionalForm = ({
  professional,
  setShowModal,
}: {
  professional: any;
  setShowModal: (v: boolean) => void;
}) => {
  const formikRef = useRef<FormikProps<ProfessionalDetail>>(null);

  const {
    formField: { jobRole, company, duration },
  } = professionalFormModel;

  const handleSubmit = async (
    values: ProfessionalDetail,
    actions: FormikHelpers<ProfessionalDetail>
  ) => {
    try {
      if (!professional) {
        const data = await UserApi.addProfessionAsync(values);
        console.log(data);
      } else {
        const data = await ProfessionApi.updateProfessionAsync(
          professional._id!,
          values
        );
      }

      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteData = async () => {
    if (professional) {
      await ProfessionApi.deleteProfessionAsync(professional._id!);
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.setFieldValue("jobRole", professional?.jobRole ?? "");
      formikRef.current.setFieldValue(
        "company",
        professional?.company ?? company.initialValue
      );
    }
  }, [professional]);

  return (
    <div>
      <Formik
        innerRef={formikRef}
        initialValues={professionalFormInitialValue}
        onSubmit={handleSubmit}
        validationSchema={professionalFormvalidationSchema}
      >
        {(formik) => (
          <div className="bg-white px-20 py-10 shadow-lg rounded-lg">
            <Form>
              <TextField
                label={jobRole.label}
                name={jobRole.name}
                type="text"
              />

              <CompanyField name={company.name} />

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

export default ProfessionalForm;
