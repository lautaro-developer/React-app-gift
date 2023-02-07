import React from "react";
import "./gif.css"
import Descrip from "./gifDescripcion.jsx"

export const Gif = ({ url, title, id }) => {
  return (
    <a
      key={id}
      href={`#${id}`} 
      className="a"
      >
      <img src={url} />
      <h4>titulo: {title}</h4>
      <p>{id}</p>
      <p>Detalle</p>
    </a>
  );
};
