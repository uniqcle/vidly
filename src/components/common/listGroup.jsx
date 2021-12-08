import React from 'react'

const ListGroup = (props) => {


    const { items,
        selectedGenre,
        nameProperty,
        onItemSelect
    } = props;

    return (
        <>
<<<<<<< HEAD
            <ul className="list-group">

                {items.map(item => (
                    <li
                        key={item[nameProperty]}
                        className={(item === selectedGenre) ? "list-group-item active" : "list-group-item "}
                        style={{ cursor: "pointer" }}
                        onClick={() => onItemSelect(item)}
                    >{item.name}</li>
                ))}


            </ul>
=======
        <ul className="list-group">

        {items.map( item => (
            <li 
            key={item[valueProperty]} 
            className={ (item === selectedGenre) ? "list-group-item active" : "list-group-item "}
            style={{cursor:"pointer"}}
            onClick={ () => onItemSelect(item)}
            >{item.name}</li>
        ))}
        
 
        </ul>
>>>>>>> 1c277299681583cfb6de7b7d5e57fd2b0f0f3674
        </>
    )
}


ListGroup.defaultProps = {
    nameProperty: "name",
    valueProperty: "_id"
}
export default ListGroup