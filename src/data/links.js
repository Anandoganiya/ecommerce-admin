import { FiShoppingBag } from "react-icons/fi";
import { BsFillInboxesFill } from "react-icons/bs";
import { FaUsers, FaClipboardList } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
export const links = [
  {
    title: "Dashboard",
    pageLink: [
      {
        name: "Ecommerce",
        icon: <FiShoppingBag />,
        slugName: "",
      },
    ],
  },
  {
    title: "Product",
    pageLink: [
      {
        name: "Products",
        icon: <BsFillInboxesFill />,
        slugName: "products",
      },
    ],
  },
  {
    title: "Customer",
    pageLink: [
      {
        name: "Customers",
        icon: <FaUsers />,
        slugName: "customers",
      },
    ],
  },
  {
    title: "Order",
    pageLink: [
      {
        name: "Orders",
        icon: <FaClipboardList />,
        slugName: "orders",
      },
    ],
  },
  {
    title: "Category",
    pageLink: [
      {
        name: "Categories",
        icon: <MdCategory />,
        slugName: "categories",
      },
    ],
  },
];
