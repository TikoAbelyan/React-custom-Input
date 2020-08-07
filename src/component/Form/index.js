import React, { Fragment } from "react";
import { useFields } from "../../hook/Input/Input";
import "./styles.css";
const Todo = () => {
  const {
    fields,
    addField,
    deleteField,
    handleChange,
    ishandleChange,
    handleToggle,
    val,
  } = useFields();

  return (
    <div>
      <h1 className="heading">Interactive handling input fields</h1>
      <div className="wrap">
        {!!fields &&
          fields.map((el, index) => (
            <div key={index} className="all_fields">
              <div className="wrap_names">
                {el.editable ? (
                  <input
                    className="isInput"
                    value={el.name}
                    onChange={({ target: { value } }) =>
                      ishandleChange({ value, type: "name", index })
                    }
                  />
                ) : (
                  <span>{el.name} </span>
                )}
                {el.editable ? (
                  <input
                    className="isInput"
                    value={el.lastname}
                    onChange={({ target: { value } }) =>
                      ishandleChange({ value, type: "lastname", index })
                    }
                  />
                ) : (
                  <span>{el.lastname}</span>
                )}
              </div>
              <div className="wrap_btn">
                <button
                  className="btn_del-hand"
                  onClick={() => deleteField({ index })}
                >
                  X
                </button>
                <button
                  className={`btn_del-hand ${
                    !el.editable ? "btn_emb" : "btn_fact"
                  }`}
                  onClick={() => handleToggle({ index })}
                >
                  {!el.editable ? "edit" : "save"}
                </button>
              </div>
              <br />
            </div>
          ))}
      </div>
      <div className="add_new">
        <input
          value={val.name}
          type="text"
          onChange={({ target: { value } }) =>
            handleChange({ value, type: "name" })
          }
        />
        <input
          value={val.lastname}
          type="text"
          onChange={({ target: { value } }) =>
            handleChange({ value, type: "lastname" })
          }
        />
        <button onClick={addField}>Add</button>
      </div>
    </div>
  );
};

export default Todo;
