import React from 'react';
import {SOCIAL_LIST} from "../../constants/index.js";
import {getIconByStack} from "../UI/StackTechnologies.jsx";

const DuplicateBanner = () => {
  return (
      <>
        {SOCIAL_LIST.map((image, index) => (
            <div className="text-3xl" key={index}>{getIconByStack(image)}</div>
        ))}
      </>
  );
};

export default DuplicateBanner;
