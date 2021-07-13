import React from "react";

const SizeContext = React.createContext({
  width: null,
  layout: null,
  device: null,
});

export default SizeContext;
