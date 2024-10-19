import { useCallback } from "react";

type TProps<T> = {
  options?: T[];
  emptyListComponent?: React.ReactNode;
  renderItem: (item: T, index: number) => React.ReactNode;
};

const SearchBarDropDown = <T,>(props: TProps<T>) => {
  const { options, emptyListComponent, renderItem } = props;

  const renderItemList = useCallback(() => {
    if (!options) {
      return emptyListComponent;
    }

    if (options.length === 0) {
      return emptyListComponent;
    }

    return options.map((item, index) => renderItem(item, index));
  }, [options]);

  return <div className="results-list">{renderItemList()}</div>;
};

export default SearchBarDropDown;
