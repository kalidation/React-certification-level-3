import Dialog from "../components/Dialog";
import { Button } from "@/components/ui/button";
import { useToggleDialog } from "../hooks/useToggleDialog";
import Actions from "../components/Actions";

const SimpleDialog = () => {
  const { dialogRef, modal, openDialog, closeDialog, toggleIsModal } =
    useToggleDialog();

  return (
    <div>
      <div className="flex gap-x-5">
        <Actions
          dialogExampleTitle="simple"
          modal={modal}
          openDialog={openDialog}
          closeDialog={closeDialog}
          toggleIsModal={toggleIsModal}
        />
      </div>

      <Dialog isModal={modal.isModal} ref={dialogRef}>
        <Dialog.Body>Are you sure you want to remove this team ?</Dialog.Body>
        <Dialog.Footer>
          <div className="flex gap-x-5">
            <Button variant="ghost" onClick={closeDialog}>
              No
            </Button>
            <Button
              onClick={() => {
                closeDialog();
                alert("removed");
              }}
              variant="outline"
            >
              Yes
            </Button>
          </div>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
};

export default SimpleDialog;
