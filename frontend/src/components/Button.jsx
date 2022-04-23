import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      type={props.type}
      className={props.className}
    >
      {props.text ? props.text : props.children}
    </button>
  );
};

export default Button;
