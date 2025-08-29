import { useState, useEffect } from "react";

const Contacts = ({ data }) => {
  // const [mappedData, setMappedData] = useState([]);

  // useEffect(() => {
  //   setMappedData(data);
  // }, [data]);

  return (
    <div>
      <h3>Contacts Added</h3>
      {data.map((contact) => {
        return (
          <div>
            <strong>{contact.name}</strong>
            <p>{contact.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
