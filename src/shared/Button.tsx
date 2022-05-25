import styled from "styled-components";
import { Link } from "react-router-dom";
import { Children } from "react";
// import { Button as BootstrapButton } from "react-bootstrap";

interface ButtonProps {
  type: any;
  children: string;
  customStyle: any;
}

export const Button = ({ type, children, customStyle }: ButtonProps) => {
  return (
    <button
      className={`flex-shrink-0  text-sm border-4 text-white py-1 px-2 rounded ${customStyle}`}
      type={type}
    >
      {children}
    </button>
  );
};

export const SaveButton = () => (
  <Button
    type="submit"
    customStyle="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700"
    children="Submit"
  />
);

export const CancelButton = () => (
  <Button
    type="reset"
    customStyle="bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700"
    children="Cancel"
  />
);
