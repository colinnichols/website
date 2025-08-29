import { useState, useRef } from "react";

const useFormReset = (initialState) => {
  const [values, setValues] = useState(initialState);

  const resetForm = () => setValues(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    //console.log(value);
  };

  return {
    values,
    resetForm,
    handleInputChange,
  };
};

const AddForm = ({ updateData }) => {
  const { values, resetForm, handleInputChange } = useFormReset({
    name: "",
    email: "",
  });

  const myForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name && !values.email) {
      alert("name and email are required");
      return;
    }
    console.log("Form submitted:", values);
    resetForm();
    // updateData(values);
    updateData((prevData) => [...prevData, values]);
  };

  return (
    <form ref={myForm} onSubmit={handleSubmit}>
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
      <br />
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
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default AddForm;
