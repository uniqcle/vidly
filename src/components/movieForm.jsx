import React, { Component } from 'react';

const MovieForm = ({ match, history }) => {

    return (
        <div>
            <h2> MovieForm {match.params.id} </h2>
            <div className="btn btn-primary" onClick={() => history.push('/movies')}>Save</div>
        </div>
    )
}

export default MovieForm;