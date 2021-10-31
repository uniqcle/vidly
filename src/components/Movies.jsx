import { render } from '@testing-library/react'
import React, {Component} from 'react'
import { getMovies, deleteMovie, } from '../services/fakeMovieService'
import {getGenres} from '../services/fakeGenreService'
import Likes from './common/likes'
import Pagination from './common/pagination'
import {paginate} from './utils/paginate'
import ListGroup from '../components/common/listGroup'


export default class Movies extends Component{

    state = {
        movies: [],
        genres: [],
        pageSize: 4, 
        currentPage: 1
    }

    componentDidMount(){
        const genres = [{name: 'All Genres'}, ...getGenres() ]
        this.setState({ movies: getMovies(), genres })
    }

    handleDelete( product ){
        const filtered = this.state.movies.filter( movie => product._id !== movie._id )
        this.setState({movies:filtered})
    }
    handleLike = (movie) => {
    
        const movies = [...this.state.movies]
        const index=movies.indexOf(movie)
        movies[index]={...movies[index]}
        movies[index].liked=!movies[index].liked;
         
        this.setState({movies})
    }

    handlePageChange = (page) => {
        console.log( page )
        this.setState({currentPage: page, })
    }

    handleGenreSelect = genre => {
       this.setState({selectedGenre: genre, currentPage: 1 })
    }

    render(){
        const {length: movieCount} = this.state.movies;
        const { movies: allMovies, currentPage, selectedGenre, pageSize } = this.state; 

     
        if( movieCount === 0 ) return <p>There are no movies</p>


        const filtered = selectedGenre && selectedGenre._id ? 
        allMovies.filter(movie => movie.genre._id === selectedGenre._id) : allMovies;

        const movies = paginate(filtered, currentPage, pageSize)
 

        return (
            <>

            <div className="row">
                <div className="col-3">
                    <ListGroup 
                    items={this.state.genres}
                    selectedGenre={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col-9">

                <h3>Showing {filtered.length} movies in the database. </h3>
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

                {movies.map( movie => (
                    <tr key={movie._id}>
                    <th >{movie.title}</th>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <Likes 
                        liked={movie.liked}
                        onClick={()=>this.handleLike(movie)}
                        />
                    </td>
                    <td>
                        <button 
                        onClick={()=>{this.handleDelete( movie )}}
                        className="btn btn-danger btn-sm">
                            Delete
                        </button>
                    </td>
                    </tr>
                ))}

               

            </tbody>
            </table>

                    <Pagination 
                    itemsCount={filtered.length}
                    pageSize={this.state.pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={this.state.currentPage}
                    />

                </div>
            </div>
            




            </>
        )
    }
}