import React from "react";

const ModalContext = React.createContext({
  clip: '',
  handleClip: () => {},
});

export default ModalContext;
