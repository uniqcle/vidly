import React, { Component } from 'react'
import _ from 'lodash'
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
<<<<<<< HEAD
        currentPage: 1,
        sortColumn: { column: 'title', order: 'asc' }
=======
        currentPage: 1, 
        sortColumn: {column: 'title', order: 'asc'}
>>>>>>> 1c277299681583cfb6de7b7d5e57fd2b0f0f3674
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
<<<<<<< HEAD
=======
    
>>>>>>> 1c277299681583cfb6de7b7d5e57fd2b0f0f3674
        this.setState({ currentPage: page, })
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

<<<<<<< HEAD
    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    getPagedData = () => {
        const { movies: allMovies, currentPage, selectedGenre, pageSize, sortColumn } = this.state;

        const filtered = selectedGenre && selectedGenre._id ?
            allMovies.filter(movie => movie.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.column], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize)

        return { totalCount: filtered.length, data: movies }
=======
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
    
>>>>>>> 1c277299681583cfb6de7b7d5e57fd2b0f0f3674
    }

    render() {
        const { length: movieCount } = this.state.movies;
<<<<<<< HEAD
        const { sortColumn, currentPage, pageSize } = this.state;

=======
        const {  sortColumn } = this.state;
>>>>>>> 1c277299681583cfb6de7b7d5e57fd2b0f0f3674


      if (movieCount === 0) return <p>There are no movies</p>

<<<<<<< HEAD
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

                        <h3>Showing {totalCount} movies in the database. </h3>

                        <MoviesTable
                            movies={movies}
                            onLike={this.handleLike}
                            onDelete={this.handleDelete.bind(this)}
                            sortColumn={sortColumn}
                            onSort={this.handleSort}
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
        )
=======
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
                <h3>Showing {totalCount} movies in the database. </h3>

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
>>>>>>> 1c277299681583cfb6de7b7d5e57fd2b0f0f3674
    }
}