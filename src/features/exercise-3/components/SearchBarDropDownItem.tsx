import { FC, useMemo } from "react";

type TProps = {
  value: string;
  query: string;
  onClick: VoidFunction;
};

const SearchBarDropDownItem: FC<TProps> = (props) => {
  const { value, query, onClick } = props;

  const parts = value.split(new RegExp(`(${query})`, "gi"));

  const highlightedText = useMemo(
    () =>
      parts
        .flat()
        .map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <strong key={index}>{part}</strong>
          ) : (
            <span key={index}>{part}</span>
          )
        ),
    [parts, value, query]
  );

  return (
    <div className="result">
      <p className="my-2 w-full h-full" onClick={onClick}>
        {highlightedText}
      </p>
    </div>
  );
};

export default SearchBarDropDownItem;
