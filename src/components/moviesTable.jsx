import React, {Component} from 'react'
import TableHeader from './common/tableHeader'
import Likes from './common/likes'

export default class MoviesTable extends Component{
    
    columns = [
        {column: "title", label: "Title"}, 
        {column: "genre.name", label: "Genre"},
        {column: "numberInStock", label: "Stock"},
        {column: "dailyRentalRate", label: "Rate"},
        {key: "stock"},
        {key: "rate"},
    ]

    
    render(){
        const { movies, onDelete, onLike, sortColumn, onSort  } = this.props;

        return (
            <>
    
                <table className="table">
                    <TableHeader 
                    columns={this.columns} 
                    sortColumn={sortColumn}
                    onSort={onSort}
                    />

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
