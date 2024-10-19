import { ChangeEvent, useState } from "react";

import { ITEM_KEY } from "../utils/constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SetterComponent = () => {
  const [value, setValue] = useState("");
  const [_storedValue, setStoredValue] = useLocalStorage<string>(ITEM_KEY);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const storeValue = () => {
    setStoredValue(value);
    setValue("");
  };

  return (
    <div className="flex flex-col gap-x-10 gap-y-2">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Setter
      </h2>
      <div className="flex items-center space-x-4">
        <Label className="text-xl" htmlFor="value">
          Value
        </Label>
        <Input
          id="value"
          value={value}
          onChange={handleChange}
          placeholder="Enter a value ..."
          className="max-w-[300px]"
        />
      </div>
      <div>
        <Button onClick={storeValue}> Store value in local storage </Button>
      </div>
    </div>
  );
};

export default SetterComponent;
