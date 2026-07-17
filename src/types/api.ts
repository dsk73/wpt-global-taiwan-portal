export interface ApiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}