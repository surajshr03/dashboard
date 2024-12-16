import { BookingProps, BookProps, TransactionProps, UserProps } from "./type";

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
  {
    id: 13,
    amount: "2500",

    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2024-12-24",
    type: "Transaction",
    status: "Canceled",
  },
  {
    id: 14,
    amount: "2000",
    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2024-12-24",
    type: "Transaction",
    status: "Confirmed",
  },
  {
    id: 15,
    amount: "12500",

    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2024-12-24",
    type: "Transaction",
    status: "Pending",
  },
  {
    id: 16,
    amount: "4500",

    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2012-12-24",
    type: "Transaction",
    status: "Canceled",
  },
  {
    id: 17,
    amount: "4900",

    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2017-12-24",
    type: "Transaction",
    status: "Pending",
  },
  {
    id: 18,
    amount: "49000",

    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2022-12-24",
    type: "Transaction",
    status: "Confirmed",
  },
  {
    id: 19,
    amount: "100",

    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2022-12-24",
    type: "Transaction",
    status: "Confirmed",
  },
];
export const Users: UserProps[] = [
  {
    device_id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@gmail.com",
    created: "2023-05-01",
    disable: false,
    user_status: true,
  },
  {
    device_id: 203,
    name: "Suraj Shrestha",
    email: "suraj.shr@gmail.com",
    created: "2023-05-01",
    disable: false,
    user_status: false,
  },
  {
    device_id: 2,
    name: "Bob Smith",
    email: "bob.smith@gmail.com",
    created: "2023-05-02",
    disable: true,
    user_status: false,
  },
  {
    device_id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@gmail.com",
    created: "2023-05-03",
    disable: false,
    user_status: true,
  },
  {
    device_id: 4,
    name: "David Lee",
    email: "david.lee@gmail.com",
    created: "2023-05-04",
    disable: true,
    user_status: false,
  },
  {
    device_id: 5,
    name: "Eva Green",
    email: "eva.green@gmail.com",
    created: "2023-05-05",
    disable: false,
    user_status: true,
  },
  {
    device_id: 6,
    name: "Frank White",
    email: "frank.white@gmail.com",
    created: "2023-05-06",
    disable: true,
    user_status: false,
  },
  {
    device_id: 7,
    name: "Gina Martin",
    email: "gina.martin@gmail.com",
    created: "2023-05-07",
    disable: false,
    user_status: true,
  },
  {
    device_id: 8,
    name: "Henry Black",
    email: "henry.black@gmail.com",
    created: "2023-05-08",
    disable: true,
    user_status: false,
  },
  {
    device_id: 9,
    name: "Ivy Thompson",
    email: "ivy.thompson@gmail.com",
    created: "2023-05-09",
    disable: false,
    user_status: true,
  },
  {
    device_id: 10,
    name: "Jackie Wilson",
    email: "jackie.wilson@gmail.com",
    created: "2023-05-10",
    disable: true,
    user_status: false,
  },
  {
    device_id: 11,
    name: "Kyle Parker",
    email: "kyle.parker@gmail.com",
    created: "2023-05-11",
    disable: false,
    user_status: true,
  },
  {
    device_id: 12,
    name: "Laura Young",
    email: "laura.young@gmail.com",
    created: "2023-05-12",
    disable: true,
    user_status: false,
  },
  {
    device_id: 13,
    name: "Matt Harris",
    email: "matt.harris@gmail.com",
    created: "2023-05-13",
    disable: false,
    user_status: true,
  },
  {
    device_id: 14,
    name: "Nina Walker",
    email: "nina.walker@gmail.com",
    created: "2023-05-14",
    disable: true,
    user_status: false,
  },
  {
    device_id: 15,
    name: "Oscar King",
    email: "oscar.king@gmail.com",
    created: "2023-05-15",
    disable: false,
    user_status: true,
  },
  {
    device_id: 16,
    name: "Paul Scott",
    email: "paul.scott@gmail.com",
    created: "2023-05-16",
    disable: true,
    user_status: false,
  },
  {
    device_id: 17,
    name: "Quinn Turner",
    email: "quinn.turner@gmail.com",
    created: "2023-05-17",
    disable: false,
    user_status: true,
  },
  {
    device_id: 18,
    name: "Rita Morris",
    email: "rita.morris@gmail.com",
    created: "2023-05-18",
    disable: true,
    user_status: false,
  },
  {
    device_id: 19,
    name: "Sam Bell",
    email: "sam.bell@gmail.com",
    created: "2023-05-19",
    disable: false,
    user_status: true,
  },
  {
    device_id: 20,
    name: "Tina Clark",
    email: "tina.clark@gmail.com",
    created: "2023-05-20",
    disable: true,
    user_status: false,
  },
];
export const Bookings:BookingProps[] = [
    {
      id: 1,
      name: "John Doe 1",
      book: "The Great Gatsby",
      date: "2005-05-01",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Jane Smith",
      book: "To Kill a Mockingbird",
      date: "2012-05-02",
      status: "Pending",
    },
    {
      id: 3,
      name: "Bob Johnson",
      book: "1984",
      date: "2018-05-03",
      status: "Canceled",
    },
    {
      id: 4,
      name: "Emilia",
      book: "The Awakening",
      date: "2020-05-01",
      status: "Confirmed",
    },
    {
      id: 5,
      name: "Suraj",
      book: "Fifty Shades Of Gray",
      date: "2015-05-02",
      status: "Pending",
    },
    {
      id: 6,
      name: "Paulo",
      book: "In Winter",
      date: "2022-05-03",
      status: "Canceled",
    },
    {
      id: 11,
      name: "John Doe",
      book: "The Great Gatsby",
      date: "2005-05-01",
      status: "Confirmed",
    },
    {
      id: 12,
      name: "Jane Smith",
      book: "To Kill a Mockingbird",
      date: "2012-05-02",
      status: "Pending",
    },
    {
      id: 13,
      name: "Bob Johnson",
      book: "1984",
      date: "2018-05-03",
      status: "Canceled",
    },
    {
      id: 14,
      name: "Emilia",
      book: "The Awakening",
      date: "2020-05-01",
      status: "Confirmed",
    },
    {
      id: 15,
      name: "Suraj",
      book: "Fifty Shades Of Gray",
      date: "2015-05-02",
      status: "Pending",
    },
    {
      id: 16,
      name: "Paulo",
      book: "In Winter",
      date: "2022-05-03",
      status: "Canceled",
    },

]
export const Notifications = [
  {
    id: 1,
    description: "Your payment of Rs. 5,000 has been successfully processed.",
    date: "2024-11-27",
    time: "10:45 AM",
    type: "Confirmed", // Types: Confirmed, Pending, Canceled
  },
  {
    id: 2,
    description: "Your refund request for Order #12345 is pending.",
    date: "2024-11-27",
    time: "02:15 PM",
    type: "Pending",  
  },
  {
    id: 3,
    description:
      "Your subscription renewal was canceled due to a payment failure.",
    date: "2024-11-26",
    time: "09:30 AM",
    type: "Canceled",
  },
  {
    id: 4,
    description: "Your booking for Hotel Sunshine has been confirmed.",
    date: "2024-11-25",
    time: "08:00 AM",
    type: "Confirmed",
  },
  {
    id: 5,
    description: "The delivery of your order #78965 is pending.",
    date: "2024-11-25",
    time: "05:20 PM",
    type: "Pending",
  },
  {
    id: 6,
    description: "Your ride to the airport was canceled by the driver.",
    date: "2024-11-24",
    time: "03:10 PM",
    type: "Canceled",
  },
  {
    id: 7,
    description:
      "Your table reservation for 2 at The Italian Bistro is confirmed.",
    date: "2024-11-24",
    time: "11:50 PM",
    type: "Confirmed",
  },
  {
    id: 8,
    description: "Your request to change the delivery address is pending.",
    date: "2024-11-23",
    time: "06:40 AM",
    type: "Pending",
  },
  {
    id: 9,
    description: "The scheduled meeting for Project X has been canceled.",
    date: "2024-11-23",
    time: "01:15 PM",
    type: "Canceled",
  },
  {
    id: 10,
    description: "Your appointment with Dr. Smith on Nov 30 is confirmed.",
    date: "2024-11-22",
    time: "04:30 PM",
    type: "Confirmed",
  },
];
export const Books: BookProps[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    price: 15.99,
    status: "Available",
    quantity: 10,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    price: 12.99,
    status: "Unavailable",
    quantity: 8,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    price: 10.99,
    status: "Unavailable",
    quantity: 5,
  },
  {
    id: 4,
    title: "The Awakening",
    author: "Kate Chopin",
    genre: "Fiction",
    price: 14.99,
    status: "Available",
    quantity: 12,
  },
  {
    id: 5,
    title: "Fifty Shades of Grey",
    author: "E. L. James",
    genre: "Romance",
    price: 9.99,
    status: "Unavailable",
    quantity: 20,
  },
  {
    id: 6,
    title: "In Winter",
    author: "William Somerset",
    genre: "Drama",
    price: 11.99,
    status: "Unavailable",
    quantity: 6,
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophy",
    price: 13.99,
    status: "Available",
    quantity: 15,
  },
  {
    id: 8,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Science Fiction",
    price: 16.99,
    status: "Unavailable",
    quantity: 9,
  },
  {
    id: 9,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic",
    price: 12.49,
    status: "Unavailable",
    quantity: 7,
  },
  {
    id: 10,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
    price: 14.99,
    status: "Available",
    quantity: 18,
  },
];
