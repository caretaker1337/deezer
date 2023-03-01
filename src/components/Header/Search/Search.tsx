import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import debounce from "lodash.debounce";

import { Loader } from "~/components";
import { Suggestions } from "./Suggestions";
import { TSuggestion } from "./Suggestions/Item/types";
import { SvgCloseIcon, SvgSearchIcon } from "~/icons";
import {
  StyledWrapper,
  StyledIcon,
  StyledInput,
  StyledLoader,
  StyledClear,
} from "./styled";

const Search: React.FC = () => {
  const { pathname } = useLocation();
  const [suggestions, setSuggestions] = useState<TSuggestion[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, toggleLoading] = useState<boolean>(false);

  const delayedQuery = useCallback(
    debounce((value: string): void => {
      DZ.api(
        `/search?q=track:"${value}"&method=search_getSuggestedQueries&limit=10`,
        ({ data }) => {
          setSuggestions(data);
          toggleLoading(false);
        }
      );
    }, 500),
    []
  );

  const handleInputChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    const { value } = currentTarget;

    setInputValue(value);
  };

  const handleInputClear = (): void => {
    setInputValue("");
    setSuggestions([]);
  };

  useEffect((): void => {
    if (inputValue.length === 0) {
      return;
    }
    toggleLoading(true);
    delayedQuery(inputValue);
  }, [inputValue]);

  useEffect((): void => {
    handleInputClear();
  }, [pathname]);

  return (
    <StyledWrapper>
      <StyledInput
        onChange={handleInputChange}
        placeholder="Search"
        type="text"
        value={inputValue}
      />

      {isLoading ? (
        <StyledLoader>
          <Loader isSmall />
        </StyledLoader>
      ) : inputValue.length > 0 ? (
        <StyledClear onClick={handleInputClear} type="button">
          <SvgCloseIcon />
        </StyledClear>
      ) : (
        <StyledIcon>
          <SvgSearchIcon />
        </StyledIcon>
      )}

      {!!inputValue.length && suggestions && !!suggestions.length && (
        <Suggestions items={suggestions} />
      )}
    </StyledWrapper>
  );
};

export { Search };
