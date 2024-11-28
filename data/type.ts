export type TransactionProps = {
  id: number;
  amount: string;
  description: string;
  time: string;
  date: string;
  type: string;
  status: string;
};


export type UserProps ={
  id: number,
  name: string,
  email: string,
  date: string,
  role: string,
};

export type BookingProps ={
  id: number,
  name: string,
  book: string,
  date: string,
  status: string,
}

export type PaginationProps = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

