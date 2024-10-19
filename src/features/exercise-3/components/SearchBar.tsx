import "./SearchBar.css";
import { Search as SearchIcon } from "lucide-react";
import SearchBarDropDown from "./SearchBarDropDown";
import SearchBarDropDownItem from "./SearchBarDropDownItem";
import React, { useCallback, useState } from "react";

import SearchBarEmptyDropDown from "./SearchBarEmptyDropDown";
import useInputFocus from "../hooks/useInputFocus";

type TProps<T> = {
  options?: T[];
  key?: keyof T;
  labelFilterKey: keyof T;
  placeholder?: string;
  defaultValue?: string | number;
  valueChange: (value: T) => void;
};

const SearchBar = <T,>(props: TProps<T>) => {
  const {
    options,
    labelFilterKey,
    key,
    placeholder,
    defaultValue,
    valueChange,
  } = props;
  const [query, setQuery] = useState<string>("");

  const { isOpen, onBlur, onFocus } = useInputFocus();

  /** check if the filterKey and labelKey are supported type as attributs */
  const isKeysAreTypeSupported =
    typeof labelFilterKey === "string" || typeof labelFilterKey === "number";

  const isValidFilterType = (value: any) => {
    return typeof value === "string" || typeof value === "number";
  };

  const filterByQuery = (itemValue: any, query: string): boolean => {
    return itemValue.toString().toLowerCase().includes(query.toLowerCase());
  };

  const filteredOptions = useCallback(() => {
    if (!isKeysAreTypeSupported) {
      throw new Error("Type of the filter key must be string or number");
    }

    return options?.filter((item) => {
      const itemValue = item[labelFilterKey];

      if (!isValidFilterType(itemValue)) {
        throw new Error(
          "Type of the filtered value must be string, number, or an array"
        );
      }

      return query ? filterByQuery(itemValue, query) : undefined;
    });
  }, [options, labelFilterKey, query]);

  const renderItem = useCallback(
    (item: T, index: number): React.ReactNode => {
      const _key = key && typeof item[key] === "string" ? item[key] : index;
      const value =
        typeof item[labelFilterKey] === "string" ? item[labelFilterKey] : "";

      return (
        <SearchBarDropDownItem
          query={query}
          key={_key}
          value={value}
          onClick={() => {
            setQuery(item[labelFilterKey] as string);
            valueChange(item);
          }}
        />
      );
    },
    [query]
  );

  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <SearchIcon className="h-5 w-5 mr-4" color="black" />
        <input
          className="input-search-bar"
          placeholder={
            placeholder ?? `Type to search ${labelFilterKey as string} ...`
          }
          defaultValue={defaultValue}
          value={query}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={({ target }) => setQuery(target.value)}
        />
      </div>
      {isOpen ? (
        <SearchBarDropDown
          options={filteredOptions()}
          emptyListComponent={
            <SearchBarEmptyDropDown
              labelFilterKey={labelFilterKey as string | number}
            />
          }
          renderItem={renderItem}
        />
      ) : null}
    </div>
  );
};

export default SearchBar;
