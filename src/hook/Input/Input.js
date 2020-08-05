import React from "react";

export const useFields = () => {
  const [fields, setFields] = React.useState([
    {
      name: "John",
      lastname: "Doe",
      checked: false,
      editable: false,
    },
    {
      name: "Mike",
      lastname: "Asure",
      checked: false,
      editable: false,
    },
  ]);
  const [val, setVal] = React.useState({ name: "", lastname: "" });
  const addField = () => {
    setFields((prev) => [
      ...prev,
      {
        name: val.name,
        lastname: val.lastname,
        checked: false,
        editable: false,
      },
    ]);
  };
  const deleteField = ({ index }) =>
    setFields((prevState) => prevState.filter((it, i) => index !== i));

  const handleChange = ({ type, value }) => {
    setVal((prev) => ({ ...prev, [type]: value }));
  };
  const ishandleChange = ({ type, value, index }) => {
    setFields((prevState) =>
      prevState.map((it, i) =>
        index === i ? { ...it, [type]: value } : { ...it }
      )
    );
  };
  const handleToggle = ({ index }) =>
    setFields((prevState) =>
      prevState.map((it, i) =>
        index === i ? { ...it, editable: !it.editable } : { ...it }
      )
    );

  return {
    fields,
    addField,
    deleteField,
    handleChange,
    ishandleChange,
    handleToggle,
  };
};
