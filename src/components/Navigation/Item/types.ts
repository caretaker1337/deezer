import React from "react";

export interface TNavItem {
  href: string;
  icon: React.ReactElement;
  id: string;
  text: string;
}

export type TProps = Omit<TNavItem, "id">;
