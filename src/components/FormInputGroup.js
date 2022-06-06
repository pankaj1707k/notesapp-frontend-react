import React from "react";

const FormInputGroup = (props) => {
  return (
    <div class="input-group flex-nowrap mb-3">
      <span class="input-group-text" id="basic-addon1">
        <i className={props.icon}></i>
      </span>
      <input
        type={props.type}
        class="form-control form-control-lg"
        id={props.name.toLowerCase()}
        placeholder={props.name}
        aria-label={props.name}
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default FormInputGroup;
