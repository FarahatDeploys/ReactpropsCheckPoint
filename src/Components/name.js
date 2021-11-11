import React from "react";
import "../Components/styles.css";

const NameValue = "Hady Ahmed Mohamed Farahat";
function Name(props) {
  return (
    <>
      <h1>{props.Name || "Hady Ahmed Mohamed Farahat"}</h1>
    </>
  );
}
export default Name;
export { NameValue };
