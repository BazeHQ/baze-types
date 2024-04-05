export interface IPagination {
  page: {
    hasNext: boolean;
    hasPrevious: boolean;
    current: number;
    next: number;
    previous: number;
    total: number;
    firstRecordIndex: number;
  };
  size: number;
  total: number;
}
