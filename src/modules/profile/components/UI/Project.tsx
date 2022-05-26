import React, { useEffect, useState } from "react";
import ProjectForm from "../forms/ProjectForm";
import { HiOutlinePlusCircle } from "react-icons/hi";

const Project = ({ details }: { details: any }) => {
  const [project, setProject] = useState<any>();
  const [showModal, setShowModal] = useState(false);

  const setFormModal = (item: any) => {
    setProject(item);
    setShowModal(true);
  };
  useEffect(() => {
    console.log(details);
  }, [details]);
  return (
    <div>
      <div className="flex items-center justify-between max-w-[80%] mx-auto">
        <h1 className="text-2xl">Project Details</h1>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <HiOutlinePlusCircle className="h-8 w-8" />
        </button>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <ProjectForm project={project} setShowModal={setShowModal} />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {details &&
        details.map((item: any, index: number) => (
          <h1
            className="bg-red-500 my-4 py-4 space-x-4"
            onClick={() => setFormModal(item)}
            key={`project-${index}`}
          >
            <span>{item.name}</span>
            <span>{item.description}</span>
          </h1>
        ))}
    </div>
  );
};

export default Project;
