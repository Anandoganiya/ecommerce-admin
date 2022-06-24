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
      },
    ],
  },
  {
    title: "Product",
    pageLink: [
      {
        name: "Products",
        icon: <BsFillInboxesFill />,
      },
    ],
  },
  {
    title: "Customer",
    pageLink: [
      {
        name: "Customers",
        icon: <FaUsers />,
      },
    ],
  },
  {
    title: "Order",
    pageLink: [
      {
        name: "Orders",
        icon: <FaClipboardList />,
      },
    ],
  },
  {
    title: "Category",
    pageLink: [
      {
        name: "Categories",
        icon: <MdCategory />,
      },
    ],
  },
];
