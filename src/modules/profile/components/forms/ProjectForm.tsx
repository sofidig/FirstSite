import React, { useEffect, useRef } from "react";
import { ProjectDetail } from "../../../../application/models/ProjectDetailModels";
import projectFormModel from "../details/projectForm/projectFormModel";
import { Formik, Form, FormikValues, FormikProps, FormikHelpers } from "formik";
import TextField from "../../../../shared/formFields/TextField";
import { CancelButton, SaveButton } from "../../../../shared/Button";
import UserApi from "../../../../apis/UserApi";
import ProjectApi from "../../../../apis/ProjectApi";
import projectFormInitialValue from "../details/projectForm/projectFormInitialValue";
import projectFormvalidationSchema from "../details/projectForm/projectFormValidation";
import { HiTrash } from "react-icons/hi";

const ProjectForm = ({
  project,
  setShowModal,
}: {
  project: any;
  setShowModal: (v: boolean) => void;
}) => {
  const formikRef = useRef<FormikProps<ProjectDetail>>(null);

  const {
    formField: { name, category, description, images, skills },
  } = projectFormModel;

  const handleSubmit = async (
    values: ProjectDetail,
    actions: FormikHelpers<ProjectDetail>
  ) => {
    try {
      if (!project) {
        const data = await UserApi.addProjectAsync(values);
        console.log(data);
      } else {
        const data = await ProjectApi.updateProjectAsync(project._id!, values);
      }

      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteData = async () => {
    if (project) {
      await ProjectApi.deleteProjectAsync(project._id!);
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.setFieldValue("name", project?.name ?? "");
      formikRef.current.setFieldValue("category", project?.category ?? "");
      formikRef.current.setFieldValue("skills", project?.skills ?? "");
      formikRef.current.setFieldValue("images", project?.images ?? "");

      formikRef.current.setFieldValue(
        "description",
        project?.description ?? ""
      );

      // formikRef.current.setFieldValue(
      //   "company",
      //   professional?.company ?? company.initialValue
      // );
    }
  }, [project]);

  return (
    <div>
      <Formik
        innerRef={formikRef}
        initialValues={projectFormInitialValue}
        onSubmit={handleSubmit}
        validationSchema={projectFormvalidationSchema}
      >
        {(formik) => (
          <div className="bg-white px-20 py-10 shadow-lg rounded-lg">
            <Form>
              <TextField label={name.label} name={name.name} type="text" />
              <TextField
                label={category.label}
                name={category.name}
                type="text"
              />
              <TextField
                label={description.label}
                name={description.name}
                type="text"
              />
              <TextField label={skills.label} name={skills.name} type="text" />
              <TextField label={images.label} name={images.name} type="text" />

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

export default ProjectForm;
