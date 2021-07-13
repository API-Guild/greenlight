import React from "react";

const ModalContext = React.createContext({
  clip: null,
  handleClip: () => {},
});

export default ModalContext;
