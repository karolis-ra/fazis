import React from "react";

export const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 py-4 text-left md:px-12 md:py-6 ${className}`}
    >
      {children}
    </div>
  );
};
