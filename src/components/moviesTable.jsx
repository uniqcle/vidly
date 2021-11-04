import React, {Component} from 'react'
import TableHeader from './common/tableHeader'
import TableBody from './common/tableBody'


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

                    <TableBody 
                    data={movies}
                    />
                </table>
            </>
        )

    }


}
