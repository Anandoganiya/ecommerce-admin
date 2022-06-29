import { BsFillInboxesFill, BsCurrencyDollar } from "react-icons/bs";
import { FaUsers, FaClipboardList } from "react-icons/fa";
const cardData = [
  {
    title: "Total Earnings",
    value: 43434,
    percentage: 23,
    cardIcon: <BsCurrencyDollar />,
    IconColor: "bg-green-dark",
    cardWidth: "md:w-96",
    cardBgImg: "card_background",
  },
  {
    title: "Customers",
    value: 43434,
    percentage: 23,
    cardIcon: <FaUsers />,
    IconColor: "bg-blue-extralight",
    cardWidth: "md:w-56",
  },
  {
    title: "Sales",
    value: 43434,
    percentage: 23,
    cardIcon: <BsFillInboxesFill />,
    IconColor: "bg-orange-light",
    cardWidth: "md:w-56",
  },
  {
    title: "Orders",
    value: 43434,
    percentage: 23,
    cardIcon: <FaClipboardList />,
    IconColor: "bg-green-light",
    cardWidth: "md:w-56",
  },
];
export default cardData;
