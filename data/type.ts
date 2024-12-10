export type TransactionProps = {
  id: number;
  amount: string;
  description: string;
  time: string;
  date: string;
  type: string;
  status: string;
};

export type UserProps = {
  device_id: number;
  name: string;
  email: string;
  created: string;
  disable: boolean;
  user_status:boolean;
};

export type BookingProps = {
  id: number;
  name: string;
  book: string;
  date: string;
  status: string;
};
export type BookProps = {
  id: number;
  title: string;
  genre: string;
  author: string;
  price: number;
  quantity: number;
  status: string;
};

export type PaginationProps = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
