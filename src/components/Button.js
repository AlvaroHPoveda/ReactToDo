import React from "react";

const Button = ({changeUser, background}) => {
  return (
    <button className="boton" onClick={changeUser}>
      <i className="fas fa-greater-than" style={{ background }}></i>
    </button>
  );
};

export default Button;
