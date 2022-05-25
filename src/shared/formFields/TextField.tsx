import { useField } from "formik";

interface TextFieldProps {
  label: string;
  name: string;
  type?: string;
}

const TextField = ({ label, name, type = "text" }: TextFieldProps) => {
  const [field, meta, helper] = useField(name);

  const isError = () => {
    if (meta.touched && meta.error) return true;
    return false;
  };

  const renderHelperText = () => {
    if (meta.error && meta.touched) {
      return meta.error;
    }
  };

  return (
    <div className="mb-2 w-[80vw] md:w-[30vw]">
      <label className="block text-gray-700 text-sm font-bold mb-1 px-1">
        {label}
      </label>
      <input
        className="shadow-md appearance-none border rounded w-full py-2 mb-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...field}
        type={type}
      />
      <small className="text-red-500 font-bold text-xs px-1">
        {renderHelperText()}
      </small>
    </div>
  );
};

export default TextField;

//Grid
//Div Container
//Label
//Input
//Error Message
//Div Container Close
//Grid

//Form
//Row
