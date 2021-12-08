<<<<<<< HEAD
import React, { Component } from 'react';
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const Table = ({ data, columns, sortColumn, onSort }) => {

    return (
        <>
            <table className="table">
                <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
                <TableBody data={data} columns={columns} />
            </table>
        </>
    )
}

export default Table;
=======
import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <>
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody data={data} columns={columns} />
      </table>
    </>
  );
};

export default Table;
>>>>>>> 1c277299681583cfb6de7b7d5e57fd2b0f0f3674
