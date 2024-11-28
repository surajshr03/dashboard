export type TransactionProps = {
  id: number;
  amount: string;
  description: string;
  time: string;
  date: string;
  type: string;
  status: string;
};

export type PaginationProps = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
