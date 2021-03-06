import React, { Component } from 'react'
import { getMovies, } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import _ from 'lodash'
import MoviesTable from './moviesTable'
import Pagination from './common/pagination'
import { paginate } from './utils/paginate'
import ListGroup from '../components/common/listGroup'


export default class Movies extends Component {

    state = {
        movies: [],
        genres: [],
      pageSize: 4,
      currentPage: 1,
      sortColumn: { column: 'title', order: 'asc' }
    }

    componentDidMount() {
        const genres = [{ _id: "", name: 'All Genres' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
    }

    handleDelete(product) {
        const filtered = this.state.movies.filter(movie => product._id !== movie._id)
        this.setState({ movies: filtered })
    }
    handleLike = (movie) => {

        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked;

        this.setState({ movies })
    }

  handlePageChange = (page) => {

        this.setState({ currentPage: page, })
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    handleSort = sortColumn => { 
        this.setState({ sortColumn })
      
  }
  
  getPagedData = props => {

    const {
      movies: allMovies,
      currentPage,
      selectedGenre,
      pageSize,
      sortColumn,
    } = this.state;
      
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(
            (movie) => movie.genre._id === selectedGenre._id
          )
        : allMovies;

    const sorted = _.orderBy(
      filtered,
      [sortColumn.column],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);

    return {totalCount: filtered.length, data: movies }

    }

    render() {
      const { length: movieCount } = this.state.movies;
      const { sortColumn } = this.state;


      if (movieCount === 0) return <p>There are no movies</p>

      const { totalCount, data: movies } = this.getPagedData(); 



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

                <div>
                  <a href="/movies/new" className="btn btn-primary">New Movie</a>
                </div>


                <span>Showing {totalCount} movies in the database. </span>

                <MoviesTable
                  movies={movies}
                  onLike={this.handleLike}
                  onDelete={this.handleDelete.bind(this)}
                  onSort={this.handleSort}
                  sortColumn={sortColumn}
                />

                <Pagination
                  itemsCount={totalCount}
                  pageSize={this.state.pageSize}
                  onPageChange={this.handlePageChange}
                  currentPage={this.state.currentPage}
                />
              </div>
            </div>
          </>
        );
    }
}