import React, { Fragment } from "react";
import { useFields } from "../../hook/Input/Input";
const Todo = () => {
  const {
    fields,
    addField,
    deleteField,
    handleChangeField,
    handleToggle,
  } = useFields();

  return (
    <div>
      {fields.map((el, index) => (
        <Fragment key={index}>
          {el.editable ? (
            <input
              value={el.name}
              onChange={({ target: { value } }) =>
                handleChangeField({ value, type: "name", index })
              }
            />
          ) : (
            <span>{el.name} </span>
          )}
          {el.editable ? (
            <input
              value={el.lastname}
              onChange={({ target: { value } }) =>
                handleChangeField({ value, type: "lastname", index })
              }
            />
          ) : (
            <span>{el.lastname}</span>
          )}
          <button onClick={() => deleteField({ index })}>x</button>
          <button onClick={() => handleToggle({ index })}>edit</button>
          <br />
          {console.log(fields)}
        </Fragment>
      ))}
      <input
        // value={fields.name}
        type="text"
        onChange={({ target: { value } }) =>
          handleChangeField(value, { type: "name" })
        }
      />
      <input
        // value={fields.lastname}
        type="text"
        onChange={({ target: { value } }) =>
          handleChangeField(value, { type: "lastname" })
        }
      />
      <button onClick={(name, lastname) => addField(name, lastname)}>
        add new
      </button>
    </div>
  );
};

export default Todo;
