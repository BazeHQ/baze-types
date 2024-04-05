export interface IPagination {
  page: {
    hasNext: boolean;
    hasPrevious: boolean;
    current: number;
    next: number;
    prev: number;
    total: number;
    counter: number;
  };
  size: number;
  total: number;
}
