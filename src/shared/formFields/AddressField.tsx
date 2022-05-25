import React, { useEffect, useState } from "react";
import TextField from "./TextField";
import { useField } from "formik";

const AddressField = ({ name }: { name: string }) => {
  // const [address, setAddress] = useState({});
  // const [field, meta, helper] = useField(name);

  // const setValue = helper.setValue;

  // useEffect(() => {
  //   if (field) setAddress(field.value);
  // }, [field]);
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
