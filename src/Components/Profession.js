import React from "react";
import "../Components/styles.css";
function Profession(props) {
  return (
    <>
      <p>{props.Profession || "Mechanical Engineer"} </p>
    </>
  );
}
export default Profession;
