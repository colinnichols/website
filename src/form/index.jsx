import { useState } from "react";
import { formData } from "./formData.js";
import AddForm from "./addForm.jsx";
import Contacts from "./contacts.jsx";

// const useFormData = (initialState) => {
//   const [data, setData] = useState(initialState);

//   return { data, setData };
// };

const Form = () => {
  const [data, setData] = useState(formData);

  // const handleDataChange = (updatedData) => {
  //   setData((prevData) => [...prevData, updatedData]);
  // };

  return (
    <>
      <div className="border-t border-gray-400 my-10" />
      <AddForm updateData={setData} />
      <Contacts data={data} />
    </>
  );
};

export default Form;
