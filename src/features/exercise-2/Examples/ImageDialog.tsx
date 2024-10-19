import Dialog from "../components/Dialog";
import { useState } from "react";
import { useToggleDialog } from "../hooks/useToggleDialog";
import List from "@/components/List";
import { mockedData } from "../utils/mocks";
import ItemList from "@/components/ItemList";
import Actions from "../components/Actions";

const ImageDialog = () => {
  const { dialogRef, modal, closeDialog, openDialog, toggleIsModal } =
    useToggleDialog();

  const [currentImage, setCurrentImage] = useState<string>();

  const handleSelectImage = (imageSelected: string) => {
    setCurrentImage(imageSelected);
  };

  return (
    <div>
      <div className="flex gap-x-5">
        <Actions
          dialogExampleTitle="image"
          modal={modal}
          openDialog={openDialog}
          closeDialog={closeDialog}
          toggleIsModal={toggleIsModal}
        />
      </div>

      <Dialog isModal={modal.isModal} ref={dialogRef}>
        <Dialog.Header isClosable onClose={closeDialog}>
          <h3 className="text-xl font-semibold tracking-tight first:mt-0">
            Images
          </h3>
        </Dialog.Header>
        <Dialog.Body>
          <div className="flex flex-1 items-center justify-center">
            <img height={250} width={250} src={currentImage} />
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <List
            data={mockedData}
            renderItem={(data) => (
              <ItemList
                key={data.id}
                url={data.url}
                onClick={() => handleSelectImage(data.url)}
              />
            )}
          />
        </Dialog.Footer>
      </Dialog>
    </div>
  );
};

export default ImageDialog;
