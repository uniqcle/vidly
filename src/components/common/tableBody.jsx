import React, {Component} from 'react'
import Likes from './likes'

export default class TableBody extends Component{

    render(){
        const {data, columns} = this.props

        return (
            <>
            <tbody>
                
                {data.map(item => (
                    <tbody>
                        <tr>
                           {columns.map(column=>
                             <td></td>
                            )}
                        </tr>
                    </tbody>
                ))}

            </tbody>

            </>
        )
    }
}


{/* <tr key={movie._id}>
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
</tr> */}