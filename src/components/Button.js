import React from "react";

const Button = (handleUser, background) => {
  return (
    <div>
      <button onClick={handleUser}>
        <i className="fas fa-greater-than" style={{ background }}></i>
      </button>
    </div>
  );
};

export default Button;
