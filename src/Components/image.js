import React from "react";
import "../Components/styles.css";

let ImageURL = (props) => {
  console.log(props.children);
  return (
    <>
      <img src={props.children} alt="" />
    </>
  );
};
export default ImageURL;
