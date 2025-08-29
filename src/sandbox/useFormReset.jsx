import { useState } from "react";

export const useFormReset = (initialState) => {
  const [values, setValues] = useState(initialState);

  const resetForm = () => setValues(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    console.log(value);
  };

  return {
    values,
    resetForm,
    handleInputChange,
  };
};
