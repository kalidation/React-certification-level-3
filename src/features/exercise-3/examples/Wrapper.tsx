import { PropsWithChildren } from "react";

type TItemSelectedType = "post" | "user";

type TProps<T> = PropsWithChildren<{
  title: string;
  itemSelectedType: TItemSelectedType;
  selectedItem?: T;
  renderSelectedItem: <T extends {}>(
    item: T,
    title: TItemSelectedType
  ) => JSX.Element;
}>;

const Wrapper = <T extends {}>(props: TProps<T>) => {
  const {
    children,
    selectedItem,
    title,
    itemSelectedType,
    renderSelectedItem,
  } = props;

  return (
    <>
      <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight">
        {title}
      </h3>

      {children}

      <div className="flex flex-row gap-y-3">
        {selectedItem && renderSelectedItem<T>(selectedItem, itemSelectedType)}
      </div>
    </>
  );
};

export default Wrapper;
