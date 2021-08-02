import React from "react";
import { Helmet } from "react-helmet";

const Heading = ({title="Arico,place where you publish your articles"}) => {
  document.title = title
  return (
    <>
         <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <div className="heading_arico">
        <h2>Arico</h2>
      </div>
    </>
  );
};

export default Heading;
