import MovieListItem from '../movie-list-item/movie-list-item'
import './move-list.css'

const MovieList = ({ data, onDelete, onToggleFavourite, onToggleLike }) => {
	console.log(data)

	return (
		<ul className='movie-list'>
			{data.map(item => (
				<MovieListItem
					key={item.id}
					name={item.name}
					viewers={item.viewers}
					fauorite={item.fauorite}
					onDelete={() => onDelete(item.id)}
					onToggleFavourite={() => onToggleFavourite(item.id)}
					onToggleLike={() => onToggleLike(item.id)}
				/>
			))}
		</ul>
	)
}

export default MovieList
