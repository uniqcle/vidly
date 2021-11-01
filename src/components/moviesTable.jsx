import React from 'react'
import Likes from './common/likes'

const MoviesTable = (props) => {
    const { movies, onDelete, onLike } = props;

    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
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

export default MoviesTable;