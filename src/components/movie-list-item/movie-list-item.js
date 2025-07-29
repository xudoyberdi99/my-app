import './movie-list-item.css'

// class MovieListItem extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {}
// 	}

// 	render() {
// 		const { name, viewers, onToggleProp, onDelete, fauorite, like } = this.props

// 		return (
// 			<li
// 				className={`list-group-item d-flex justify-content-between  ${
// 					fauorite && 'increase'
// 				}  ${like && 'like'}`}
// 			>
// 				<span
// 					onClick={onToggleProp}
// 					className='list-group-item-label'
// 					data-toggle='like'
// 				>
// 					{name}
// 				</span>
// 				<input
// 					type='number'
// 					className='list-group-item-input'
// 					defaultValue={viewers}
// 				/>
// 				<div className='d-flex justify-content-center align-items-center'>
// 					<button
// 						type='button'
// 						className='btn-cookie btn-sm'
// 						onClick={onToggleProp}
// 						data-toggle='fauorite'
// 					>
// 						<i className='fas fa-cookie'></i>
// 					</button>
// 					<button type='button' className='btn-trash btn-sm' onClick={onDelete}>
// 						<i className='fas fa-trash'></i>
// 					</button>
// 					<div>
// 						<i className='fas fa-star'></i>
// 					</div>
// 				</div>
// 			</li>
// 		)
// 	}
// }

const MovieListItem = props => {
	const { name, viewers, onToggleProp, onDelete, fauorite, like } = props
	return (
		<li
			className={`list-group-item d-flex justify-content-between  ${
				fauorite && 'increase'
			}  ${like && 'like'}`}
		>
			<span
				onClick={onToggleProp}
				className='list-group-item-label'
				data-toggle='like'
			>
				{name}
			</span>
			<input
				type='number'
				className='list-group-item-input'
				defaultValue={viewers}
			/>
			<div className='d-flex justify-content-center align-items-center'>
				<button
					type='button'
					className='btn-cookie btn-sm'
					onClick={onToggleProp}
					data-toggle='fauorite'
				>
					<i className='fas fa-cookie'></i>
				</button>
				<button type='button' className='btn-trash btn-sm' onClick={onDelete}>
					<i className='fas fa-trash'></i>
				</button>
				<div>
					<i className='fas fa-star'></i>
				</div>
			</div>
		</li>
	)
}

export default MovieListItem
