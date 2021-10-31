import React from 'react'

const ListGroup = (props) => {

 
    const { items, 
        selectedGenre,
        nameProperty, 
        valueProperty,
        onItemSelect
    } = props; 

    return(
        <>
        <ul className="list-group">

        {items.map( item => (
            <li 
            key={item[nameProperty]} 
            className={ (item === selectedGenre) ? "list-group-item active" : "list-group-item "}
            style={{cursor:"pointer"}}
            onClick={ () => onItemSelect(item)}
            >{item.name}</li>
        ))}
        
 
        </ul>
        </>
    )
}


ListGroup.defaultProps = {
    nameProperty: "name", 
    valueProperty: "_id"
}
export default ListGroup