import React from "react";
import TextField from "./TextField";

const AddressField = ({ name }: { name: string }) => {
  return (
    <>
      <TextField label="Address" name={`${name}.address`} />
      <TextField label="City" name={`${name}.city`} />
      <TextField label="Country" name={`${name}.country`} />
      <TextField label="Post Code" name={`${name}.postCode`} />
    </>
  );
};

export default AddressField;
