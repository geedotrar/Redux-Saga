import React from "react";

export default function Child(props) {
  return (
    <div>
      <h1>firstName :{props.firstName}</h1>
      <h1>lastName :{props.lastName}</h1>
    </div>
  );
}
