import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00C49F",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function UserTransTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ORDER TIME</StyledTableCell>
            <StyledTableCell align="right">DELIVERY ADDRESS</StyledTableCell>
            <StyledTableCell align="right"> PHONE</StyledTableCell>
            <StyledTableCell align="right">PAYMENT METHOD</StyledTableCell>
            <StyledTableCell align="right">ORDER AMOUNT</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.orderTime}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.deliveryAddress}
              </StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell align="center">
                {row.paymentMethod}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.orderAmount}
              </StyledTableCell>
              <StyledTableCell align="right">
                <span
                  className={`${
                    row.status === "Pending"
                      ? "text-yellow-500"
                      : row.status === "Approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {row.status}
                </span>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const rows = [
  {
    id: "1",
    orderTime: "may 9 2022",
    deliveryAddress: "new york",
    phoneNumber: "9999999999",
    paymentMethod: "COD",
    orderAmount: "$4343",
    status: "Pending",
  },
  {
    id: "2",
    orderTime: "may 9 2022",
    deliveryAddress: "new york",
    phoneNumber: "9999999999",
    paymentMethod: "COD",
    orderAmount: "$4343",
    status: "Approved",
  },
  {
    id: "3",
    orderTime: "may 9 2022",
    deliveryAddress: "new york",
    phoneNumber: "9999999999",
    paymentMethod: "COD",
    orderAmount: "$4343",
    status: "Rejected",
  },
  {
    id: "4",
    orderTime: "may 9 2022",
    deliveryAddress: "new york",
    phoneNumber: "9999999999",
    paymentMethod: "COD",
    orderAmount: "$4343",
    status: "Pending",
  },
];
