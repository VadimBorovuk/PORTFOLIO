import React from 'react';

const Title = ({value}) => {
  return (
      <h1
          className="py-10 lg:py-10 text-3xl md:text-4xl lg:text-6xl lg:px-6 font-bold  text-center bg-gradient-to-l from-white to-purple-500 bg-clip-text tracking-tight text-transparent">
        {value}
      </h1>
  );
};

export default Title;

