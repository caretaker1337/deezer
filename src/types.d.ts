declare namespace DZ {
  interface TRespone<T> {
    data: T;
    next: string;
    total: number;
  }

  const api: {
    (url: string, responseCallback: (response: TRespone) => void): void;
  };
}
