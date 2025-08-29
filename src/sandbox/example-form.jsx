import { useState } from "react";

const useFormReset = (initialState) => {
  const [values, setValues] = useState(initialState);

  const resetForm = () => setValues(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return {
    values,
    resetForm,
    handleInputChange,
  };
};

export const FormExample = () => {
  const { values, resetForm, handleInputChange } = useFormReset({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          className="border-1"
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          className="border-1"
        />
      </label>
      <label>
        Message:
        <input
          type="text"
          name="message"
          value={values.name}
          onChange={handleInputChange}
          className="border-1"
        />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};
