import React, {Component} from 'react'
import TableHeader from './common/tableHeader'
import TableBody from './common/tableBody'
import Likes from "./common/likes";

export default class MoviesTable extends Component {
  columns = [
    { column: "title", label: "Title" },
    { column: "genre.name", label: "Genre" },
    { column: "numberInStock", label: "Stock" },
    { column: "dailyRentalRate", label: "Rate" },
    {
      key: "stock",
      content: (movie) => (
        <Likes liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "rate",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;

    return (
      <>
        <table className="table">
          <TableHeader
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />

          <TableBody
            data={movies}
            columns={this.columns}
            onDelete={onDelete}
            onLike={onLike}
          />
        </table>
      </>
    );
  }
}
