import { TransactionProps } from "./type";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Activities = [
  {
    id: 1,
    description: 'New booking: John Doe - "The Great Gatsby"',
    time: "5 minutes ago",
    date: "2001-12-24",
    type: "Booking",
  },
  {
    id: 2,
    description: 'Transaction completed: $24.99 - "To Kill a Mockingbird"',
    time: "1 hour ago",
    date: "2001-12-24",
    type: "Transaction",
  },
  {
    id: 3,
    description: "New user registered: Jane Smith",
    time: "2 hours ago",
    date: "2001-12-24",
    type: "Book",
  },
  {
    id: 4,
    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2001-12-24",
    type: "Transaction",
  },
];

export const Transaction: TransactionProps[] = [
  {
    id: 1,
    amount: "1000",
    description: 'New booking: John Doe - "The Great Gatsby"',
    time: "5 minutes ago",
    date: "2001-12-24",
    type: "Booking",
    status: "Confirmed",
  },
  {
    id: 2,
    amount: "2000",
    description: 'Transaction completed: $24.99 - "To Kill a Mockingbird"',
    time: "1 hour ago",
    date: "2001-12-24",
    type: "Transaction",
    status: "Confirmed",
  },
  {
    id: 3,
    amount: "2000",
    description: "New user registered: Jane Smith",
    time: "2 hours ago",
    date: "2001-12-24",
    type: "Book",
    status: "Canceled",
  },
  {
    id: 4,
    amount: "2000",

    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2001-12-24",
    type: "Transaction",
    status: "Confirmed",
  },

  {
    id: 5,
    amount: "5000",

    description: 'New booking: John Doe - "The Great Gatsby"',
    time: "5 minutes ago",
    date: "2001-12-24",
    type: "Booking",
    status: "Confirmed",
  },
  {
    id: 6,
    amount: "5000",

    description: 'Transaction completed: $24.99 - "To Kill a Mockingbird"',
    time: "1 hour ago",
    date: "2001-12-24",
    type: "Transaction",
    status: "Pending",
  },
  {
    id: 7,
    amount: "1000",

    description: "New user registered: Jane Smith",
    time: "2 hours ago",
    date: "2001-12-24",
    type: "Book",
    status: "Canceled",
  },
  {
    id: 8,
    amount: "1000",

    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2001-12-24",
    type: "Transaction",
    status: "Pending",
  },

  {
    id: 9,
    amount: "1500",

    description: 'New booking: John Doe - "The Great Gatsby"',
    time: "5 minutes ago",
    date: "2001-12-24",
    type: "Booking",
    status: "Confirmed",
  },
  {
    id: 10,
    amount: "1500",

    description: 'Transaction completed: $24.99 - "To Kill a Mockingbird"',
    time: "1 hour ago",
    date: "2001-12-24",
    type: "Transaction",
    status: "Pending",
  },
  {
    id: 11,
    amount: "1500",

    description: "New user registered: Jane Smith",
    time: "2 hours ago",
    date: "2001-12-24",
    type: "Book",
    status: "Canceled",
  },
  {
    id: 12,
    amount: "1500",

    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2001-12-24",
    type: "Transaction",
    status: "Pending",
  },
];
