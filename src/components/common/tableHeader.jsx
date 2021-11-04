import React, {Component} from 'react'

export default class TableHeader extends Component{

    raiseSort( column ){
        const sortColumn = {...this.props.sortColumn}
        if(sortColumn.column === column){
           sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
        } else {
            sortColumn.column = column; 
            sortColumn.order = 'asc'
        }

        this.props.onSort( sortColumn )
    }

    render(){
        const {columns} = this.props;

        return(
            <>
            <thead className="thead-dark">
                <tr> 
                {columns.map(column => 
                    <th key={column.column || column.key} onClick={()=>this.raiseSort(column.column)} >{column.label}</th>
                    )}
                </tr>
                </thead>
            </>
        )
    }
}


    // <th onClick={ ()=> this.raiseSort('title')}>Title</th>
    // <th onClick={ ()=> this.raiseSort('genre.name')}>Genre</th>
    // <th onClick={ ()=> this.raiseSort('numberInStock')}>Stock</th>
    // <th onClick={ ()=> this.raiseSort('dailyRentalRate')}>Rate</th>
    // <th></th>
    // <th></th>
