import { useRef, useState } from "react";
import { DialogHandles, DialogType } from "../components/Dialog";

export type TModal = {
  isModal: boolean;
  title: DialogType;
};

export const useToggleDialog = () => {
  const dialogRef = useRef<DialogHandles | null>(null);

  const [modal, setModal] = useState<TModal>({
    isModal: true,
    title: "modal",
  });

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.open();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const toggleIsModal = () => {
    setModal((prev) => ({
      isModal: !prev.isModal,
      title: prev.isModal ? "normal" : "modal",
    }));
  };

  return {
    dialogRef,
    modal,
    openDialog,
    closeDialog,
    toggleIsModal,
  };
};
