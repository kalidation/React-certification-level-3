import React from "react";

const useInputFocus = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onFocus = () => setIsOpen(true);
  const onBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return {
    isOpen,
    onFocus,
    onBlur,
  };
};

export default useInputFocus;
