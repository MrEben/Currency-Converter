import React from "react";
import './styles.css'

const Card = ({ className, children }) => {
  return <article className={`card ${className}`}>{children}</article>;
};

export default Card;
