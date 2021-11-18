import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Table from './common/table'
import Likes from './common/likes'

class MoviesTable extends Component {

    columns = [
        {
            column: "title", label: "Title",
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { column: "genre.name", label: "Genre" },
        { column: "numberInStock", label: "Stock" },
        { column: "dailyRentalRate", label: "Rate" },
        {
            key: "like", content: movie => (
                <Likes liked={movie.liked} onClick={() => this.props.onLike(movie)} />
            )
        },
        {
            key: "delete", content: (movie) => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            ),
        }
    ];


    render() {
        const { movies, sortColumn, onSort } = this.props;

        return (
            <>
                <Table columns={this.columns} onSort={onSort} sortColumn={sortColumn} data={movies} />
            </>
        )
    }
}

export default MoviesTable;