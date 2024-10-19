import { ITEM_KEY } from "../utils/constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Label } from "@/components/ui/label";

const GetterComponent = () => {
  const [storedValue] = useLocalStorage<string>(ITEM_KEY);

  return (
    <div>
      <Label className="text-2xl" htmlFor="value">
        Listner
      </Label>

      <p>
        Stored Value:{" "}
        <span className="font-bold uppercase ">{storedValue}</span>{" "}
      </p>
    </div>
  );
};

export default GetterComponent;
