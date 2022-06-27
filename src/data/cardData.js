import { BsFillInboxesFill, BsCurrencyDollar } from "react-icons/bs";
import { FaUsers, FaClipboardList } from "react-icons/fa";
const cardData = [
  {
    title: "Earnings",
    value: 43434,
    percentage: 23,
    cardIcon: <BsCurrencyDollar />,
    IconColor: "bg-green-500",
  },
  {
    title: "Customers",
    value: 43434,
    percentage: 23,
    cardIcon: <FaUsers />,
    IconColor: "bg-[#38bdf8]",
  },
  {
    title: "Sales",
    value: 43434,
    percentage: 23,
    cardIcon: <BsFillInboxesFill />,
    IconColor: "bg-[#fbbf24]",
  },
  {
    title: "Orders",
    value: 43434,
    percentage: 23,
    cardIcon: <FaClipboardList />,
    IconColor: "bg-[#a3e635]",
  },
];
export default cardData;
