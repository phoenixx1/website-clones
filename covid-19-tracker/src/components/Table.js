import numeral from "numeral";
import React from "react";
import styled from "styled-components";

function Table({ countries }) {
  return (
    <TableContainer>
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </TableContainer>
  );
}

export default Table;

const TableContainer = styled.div`
  margin-top: 20px;
  overflow-y: scroll;
  color: #6a5d5d;
  height: 400px;

  tr {
    display: flex;
    justify-content: space-between;
  }
  tr:nth-of-type(odd) {
    background-color: #f3f2f8;
  }
  td {
    padding: 0.5rem;
  }
`;
