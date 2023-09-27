import React from "react";

export default function Button(props) {
  return (
    <div>
      <label>{props.label}</label>
      <button className={props.class}>{props.children}</button>
    </div>
  );
}
