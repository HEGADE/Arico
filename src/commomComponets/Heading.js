import React from "react";

const Heading = ({title}) => {
  document.title = title
  return (
    <>
      <div className="heading_arico">
        <h2>Arico</h2>
      </div>
    </>
  );
};

export default Heading;
