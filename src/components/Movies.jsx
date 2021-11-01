import React, { Component } from 'react'
import { getMovies, } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import MoviesTable from './moviesTable'
import Pagination from './common/pagination'
import { paginate } from './utils/paginate'
import ListGroup from '../components/common/listGroup'


export default class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    }

    componentDidMount() {
        const genres = [{ name: 'All Genres' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
    }

    handleDelete(product) {
        const filtered = this.state.movies.filter(movie => product._id !== movie._id)
        this.setState({ movies: filtered })
        console.log(filtered)
    }
    handleLike = (movie) => {

        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked;

        this.setState({ movies })
    }

    handlePageChange = (page) => {
        console.log(page)
        this.setState({ currentPage: page, })
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    render() {
        const { length: movieCount } = this.state.movies;
        const { movies: allMovies, currentPage, selectedGenre, pageSize } = this.state;


        if (movieCount === 0) return <p>There are no movies</p>


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

                        <MoviesTable
                            movies={movies}
                            onLike={this.handleLike}
                            onDelete={this.handleDelete.bind(this)}
                        />

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