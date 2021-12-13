import React from "react";
import styled from "styled-components";

export default function MyLineChart(props) {
  return (
    <Table>
      <tbody>
        <tr>
          <TableHeading>Month</TableHeading>
          <TableHeading>Income</TableHeading>
          <TableHeading>Savings</TableHeading>
          <TableHeading>Spending</TableHeading>
        </tr>
        <tr>
          <td>Jan</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Feb</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Mar</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Apr</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>May</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Jun</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Jul</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Aug</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Sep</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Oct</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Nov</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Dec</td>
          <td>$100.00</td>
          <td>$100.00</td>
          <td>$100.00</td>
        </tr>
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  display: table;
  text-align: center;
  width: 100%;
`;

const TableHeading = styled.th`
  background-color: #eee;
`;
