import { ITEM_KEY } from "../utils/constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

const SetterComponent = () => {
  const [_storedValue, _setStoredValue, removeValue] =
    useLocalStorage<string>(ITEM_KEY);

  const removeStoredValue = () => {
    removeValue();
  };

  return (
    <div className="flex flex-col items-start gap-y-2">
      <Label className="text-2xl" htmlFor="value">
        Remove
      </Label>

      <Button onClick={removeStoredValue}>
        Remove value from local storage
      </Button>
    </div>
  );
};

export default SetterComponent;
