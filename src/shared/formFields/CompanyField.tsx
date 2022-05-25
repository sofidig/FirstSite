import React from "react";
import AddressField from "./AddressField";
import TextField from "./TextField";

const CompanyField = ({ name }: { name: string }) => {
  return (
    <>
      <TextField label="Name" name={`${name}.name`} />
      <TextField label="Description" name={`${name}.description`} />
      <AddressField name={`${name}.address`} />
    </>
  );
};

export default CompanyField;
