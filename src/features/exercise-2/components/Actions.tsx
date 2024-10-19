import { Button } from "@/components/ui/button";
import { FC } from "react";
import { TModal } from "../hooks/useToggleDialog";

type TProps = {
  modal: TModal;
  dialogExampleTitle: string;
  openDialog: VoidFunction;
  closeDialog: VoidFunction;
  toggleIsModal: VoidFunction;
};

const Actions: FC<TProps> = (props) => {
  const { modal, dialogExampleTitle, openDialog, closeDialog, toggleIsModal } =
    props;

  return (
    <>
      <Button onClick={openDialog}>
        {`Open ${dialogExampleTitle}  dialog`}
      </Button>
      <Button onClick={closeDialog}>
        {`Close ${dialogExampleTitle}  dialog`}
      </Button>
      <Button onClick={toggleIsModal}>
        change dialog mode to {modal.title === "modal" ? "normal" : "modal"}
      </Button>
    </>
  );
};

export default Actions;
