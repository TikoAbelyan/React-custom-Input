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

  const addField = ({ name, lastname }) => {
    console.log("button click", { name, lastname });
    setFields((prevState) => [
      ...prevState,
      { name, lastname, checked: false, editable: false },
    ]);
  };
  const deleteField = ({ index }) =>
    setFields((prevState) => prevState.filter((it, i) => index !== i));

  const handleChangeField = ({ type, value, index }) => {
    // console.log("value =>", value);

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

  return { fields, addField, deleteField, handleChangeField, handleToggle };
};
