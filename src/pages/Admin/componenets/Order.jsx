import React from "react";

export default function Order(props) {
  const { name, addressone, address2, telefono, delivery, state } = props.order;
  return (
    <tr>
      <td>{name}</td>
      <td>
        {addressone} {address2}
      </td>
      <td>{telefono}</td>
      <td>{delivery}</td>
      <td>{state}</td>
      <td>
        <button>See Description </button>
      </td>
      <td>
        <button> delete </button>
      </td>
    </tr>
  );
}
