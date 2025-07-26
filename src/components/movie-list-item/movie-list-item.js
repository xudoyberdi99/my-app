import { Component } from 'react'
import './movie-list-item.css'

class MovieListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fauorite: false,
			like: false,
		}
	}

	onFaourite = () => {
		this.setState(prevState => ({
			fauorite: !prevState.fauorite,
		}))
	}

	onLike = () => {
		this.setState(prevState => ({
			like: !prevState.like,
		}))
	}
	render() {
		const { name, viewers } = this.props
		const { fauorite, like } = this.state

		return (
			<li
				className={`list-group-item d-flex justify-content-between  ${
					fauorite && 'increase'
				}  ${like && 'like'}`}
			>
				<span onClick={this.onLike} className='list-group-item-label'>
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
						onClick={this.onFaourite}
					>
						<i className='fas fa-cookie'></i>
					</button>
					<button type='button' className='btn-trash btn-sm'>
						<i className='fas fa-trash'></i>
					</button>
					<div>
						<i className='fas fa-star'></i>
					</div>
				</div>
			</li>
		)
	}
}

// const MovieListItem = ({ name, viewers, fauorite }) => {
// 	return (
// 		<li
// 			className={`list-group-item d-flex justify-content-between  ${
// 				fauorite && 'increase'
// 			}`}
// 		>
// 			<span className='list-group-item-label'>{name}</span>
// 			<input
// 				type='number'
// 				className='list-group-item-input'
// 				defaultValue={viewers}
// 			/>
// 			<div className='d-flex justify-content-center align-items-center'>
// 				<button type='button' className='btn-cookie btn-sm'>
// 					<i className='fas fa-cookie'></i>
// 				</button>
// 				<button type='button' className='btn-trash btn-sm'>
// 					<i className='fas fa-trash'></i>
// 				</button>
// 				<div>
// 					<i className='fas fa-star'></i>
// 				</div>
// 			</div>
// 		</li>
// 	)
// }

export default MovieListItem
