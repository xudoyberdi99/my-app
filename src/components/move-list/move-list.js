import './move-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = ({ data }) => {
	console.log(data)

	return (
		<ul className='movie-list'>
			{data.map((item, index) => (
				<MovieListItem
					name={item.name}
					viewers={item.viewers}
					fauorite={item.fauorite}
				/>
			))}
		</ul>
	)
}

export default MovieList
