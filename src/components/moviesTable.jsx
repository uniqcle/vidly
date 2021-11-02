import React, { Component } from 'react'
import Likes from './common/likes'


class MoviesTable extends Component {

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


    render() {
        const { movies, onDelete, onLike } = this.props;

        return (
            <>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th onClick={() => this.raiseSort('title')}>Title</th>
                            <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
                            <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
                            <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <th >{movie.title}</th>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Likes
                                        liked={movie.liked}
                                        onClick={() => onLike(movie)}
                                    />
                                </td>
                                <td>
                                    <button
                                        onClick={() => onDelete(movie)}
                                        className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </>
        )
    }
}

export default MoviesTable;