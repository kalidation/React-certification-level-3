import { FC } from "react";

type TProps = {
  labelFilterKey: string | number;
};

const SearchBarEmptyDropDown: FC<TProps> = (props) => {
  const { labelFilterKey } = props;

  return <div className="result">No {labelFilterKey} found in the list</div>;
};

export default SearchBarEmptyDropDown;
