interface TArtist {
  id: number;
  name: string;
}

export interface TTrack {
  artist: TArtist;
  duration: number;
  id: number;
  md5_image: string;
  preview: string;
  time_add: number;
  title: string;
}

export type TProps = TTrack;
