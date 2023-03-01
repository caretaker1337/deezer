export interface TSuggestion {
  artist: {
    name: string;
  };
  id: string;
  link: string;
  title: string;
  title_short: string;
}

export type TProps = TSuggestion;
