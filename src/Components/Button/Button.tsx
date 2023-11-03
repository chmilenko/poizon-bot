import React from "react";
import "./Button.css";

function Button(props: { [key: string]: any }) {
  return <button {...props} className={"button" + (props.className || "")} />;
}

export default Button;
