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
    backgroundColor: "#9ca3af",
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

export default function OrderDetailsDataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SR.</StyledTableCell>
            <StyledTableCell align="center">PRODUCT NAME</StyledTableCell>
            <StyledTableCell align="center"> QUANTITY</StyledTableCell>
            <StyledTableCell align="center">ITEM PRICE</StyledTableCell>
            <StyledTableCell align="center">AMOUNT</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.SrNo}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.productName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.quantity}</StyledTableCell>
              <StyledTableCell align="center">{row.itemPrice}</StyledTableCell>
              <StyledTableCell align="center">{row.amount}</StyledTableCell>
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
    SrNo: "1",
    productName: "Bok Choy Cabbage",
    quantity: "6",
    itemPrice: 134,
    amount: 4343,
  },
  {
    id: "2",
    SrNo: "1",
    productName: "Bok Choy Cabbage",
    quantity: "6",
    itemPrice: 134,
    amount: 4343,
  },
  {
    id: "3",
    SrNo: "1",
    productName: "Bok Choy Cabbage",
    quantity: "6",
    itemPrice: 134,
    amount: 4343,
  },
];
