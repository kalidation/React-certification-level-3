import Item from "@/features/exercise-3/components/common/Item";
import { ItemContent } from "@/features/exercise-3/components/common/ItemContent";
import PostDropdown from "@/features/exercise-3/examples/PostDropdown";
import UserDropdown from "@/features/exercise-3/examples/UserDropdown";

const ExerciseThree = () => {
  /* format the value of the correspondent key */
  const formatItemValue = <T,>(key: keyof T, item: T): string => {
    const value = item[key];
    return typeof value === "string" ? value : JSON.stringify(value);
  };

  const renderKeyValue = <T,>(key: keyof T, item: T): React.ReactNode => {
    const formattedValue = formatItemValue(key, item);
    return renderItemContent<T>(key, formattedValue);
  };

  /* render key and value */
  const renderItemContent = <T,>(label: keyof T, content: string) => {
    return <ItemContent<T> label={label} content={content} />;
  };

  const renderSelectedItem = <T extends {}>(item: T, title: string) => {
    return (
      <Item title={`Selected ${title}`}>
        {Object.keys(item).map((key) => {
          const typedKey = key as keyof T;

          return renderKeyValue(typedKey, item);
        })}
      </Item>
    );
  };

  return (
    <div>
      <UserDropdown renderSelectedItem={renderSelectedItem} />
      <PostDropdown renderSelectedItem={renderSelectedItem} />
    </div>
  );
};

export default ExerciseThree;
