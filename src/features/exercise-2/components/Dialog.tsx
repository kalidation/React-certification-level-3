import {
  useState,
  useImperativeHandle,
  forwardRef,
  PropsWithChildren,
  FC,
} from "react";
import ReactDOM from "react-dom";
import "./Dialog.css";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

type DialogProps = PropsWithChildren & {
  /**
   * if false, user can interact with the rest of the page
   * @default true
   */
  isModal?: boolean;
};

export type DialogType = "normal" | "modal";

export interface DialogHandles {
  open: () => void;
  close: () => void;
}

const DialogRoot = forwardRef<DialogHandles, DialogProps>(
  ({ isModal = true, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    return isOpen
      ? ReactDOM.createPortal(
          <>
            {isModal && <div className="backdrop" role="button" />}
            <div className="dialog">
              <div className="dialog-content">{children}</div>
            </div>
          </>,
          document.body
        )
      : null;
  }
);

export type DialogHeaderProps = PropsWithChildren<{
  isClosable?: boolean;
  onClose?: VoidFunction;
}>;

const DialogHeader: FC<DialogHeaderProps> = ({
  isClosable,
  /**
   * isClosable must be set to `true` if you want to use onClose props
   */
  onClose,
  children,
}) => {
  return (
    <div className="dialog-header">
      {children}
      {isClosable && (
        <Button onClick={onClose} variant="ghost" size="icon">
          <Cross1Icon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

const DialogBody = ({ children }: PropsWithChildren) => {
  return <div className="dialog-body">{children}</div>;
};

const DialogFooter = ({ children }: PropsWithChildren) => {
  return <div className="dialog-footer">{children}</div>;
};

const Dialog = DialogRoot as typeof DialogRoot & {
  Header: typeof DialogHeader;
  Body: typeof DialogBody;
  Footer: typeof DialogFooter;
};

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

export default Dialog;
