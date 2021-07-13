import React from "react";

const SizeContext = React.createContext({
  width: null,
  getWidth: () => {},
  layout: null,
});

export default SizeContext;
