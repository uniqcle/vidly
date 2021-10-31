import React, {Component} from 'react'
 
import '../../../node_modules/font-awesome/css/font-awesome.css'


class Likes extends Component{

    render(){
        let classes="fa fa-heart"
        if( !this.props.liked ) classes+="-o"

        return(
            <>
              
              <i className={classes} style={{cursor:'pointer'}}aria-hidden="true" onClick={this.props.onClick}></i>
            </>
        )
    }
}

export default Likes; 