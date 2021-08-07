import React from "react";
import Heading from "../commomComponets/Heading";
import "../assets/css/notfound.scss";

export default function NotFound() {
  return (
    <>
      <Heading title="page not found" />
      <h1 className="not_page">page not found 😐</h1>
    </>
  );
}
