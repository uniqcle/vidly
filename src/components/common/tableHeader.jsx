<<<<<<< HEAD
import React, { Component } from 'react';

export default class TableHeader extends Component {

    raiseSort = column => {
        const sortColumn = { ...this.props.sortColumn }
        if (sortColumn.column === column)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
        else {
            sortColumn.column = column
            sortColumn.order = 'asc'
        }
        this.props.onSort(sortColumn)
    }

    renderSortIcon = (column) => {
        const { sortColumn } = this.props;
        if (column.column !== sortColumn.column) return null;
        if (sortColumn.order === "asc")
            return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
        return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
    };

    render() {
        const { columns } = this.props;

        return (
            <thead className="thead-dark">
                <tr>
                    {columns.map(column => (
                        <th className="clickable" key={column.column || column.key}
                            onClick={() => this.raiseSort(column.column)}>{column.label}{this.renderSortIcon(column)}</th>
                    ))}


                </tr>
            </thead>
        )
    }
}
=======
import React, {Component} from 'react'

export default class TableHeader extends Component {
  raiseSort(column) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.column === column) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.column = column;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  }

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.column !== sortColumn.column) return null;
    if (sortColumn.order === "asc")
      return <i class="fa fa-sort-asc" aria-hidden="true"></i>;
    return <i class="fa fa-sort-desc" aria-hidden="true"></i>;
  };

  render() {
    const { columns } = this.props;

    return (
      <>
        <thead className="thead-dark">
          <tr>
            {columns.map((column) => (
              <th
                className="clickable"
                key={column.column || column.key}
                onClick={() => this.raiseSort(column.column)}
              >
                {column.label}
                {this.renderSortIcon(column)}
              </th>
            ))}
          </tr>
        </thead>
      </>
    );
  }
}
 
>>>>>>> 1c277299681583cfb6de7b7d5e57fd2b0f0f3674
