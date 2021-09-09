import React from "react";

function Bin() {
  return (
    <div>
      <h1 style={styleUi}>Trash</h1>
    </div>
  );
}
const styleUi = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "3rem",
};

export default Bin;
