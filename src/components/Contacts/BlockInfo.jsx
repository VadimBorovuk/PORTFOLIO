import React from 'react';
import {MdEmail} from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";

const BlockInfo = ({title, content, link}) => {

  return (
      <div
          className="w-full sm:w-1/2 lg:w-full bg-neutral-900 mb-4 rounded-3xl border border-neutral-800 flex items-center flex-col justify-center p-4">
        {
          title === 'email' ? <MdEmail className="text-xl"/> : <FaFacebookMessenger className="text-2xl"/>
        }
        <div className="py-3 text-center">
          <h4 className="text-lg capitalize">{title}</h4>
          <p className="text-md font-thin tracking-tight">{content}</p>
        </div>
        <a className="text-sm bg-neutral-800 px-6 py-3 rounded-3xl border border-neutral-800"
           href={link}>send a message</a>
      </div>
  );
};

export default BlockInfo;
