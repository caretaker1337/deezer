import React from "react";

import { TProps } from "./types";
import { StyledContent } from "./styled";

const Loader: React.FC<TProps> = ({ isSmall }) => <StyledContent {...{ isSmall }} />;

export { Loader };
