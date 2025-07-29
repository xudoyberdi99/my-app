import { Component } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../move-list/move-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					name: 'Empire of usman',
					viewers: 111,
					fauorite: true,
					like: false,
					id: 1,
				},
				{ name: 'Ertugrul', viewers: 122, fauorite: false, like: true, id: 2 },
				{
					name: 'Abdulhamidxon II',
					viewers: 1000,
					fauorite: false,
					like: false,
					id: 3,
				},
			],
		}
	}

	onDelete = id => {
		this.setState(({ data }) => {
			const index = data.findIndex(item => item.id === id)
			const newData = [...data.slice(0, index), ...data.slice(index + 1)]
			return { data: newData }
		})
	}

	addForm = (e, name, views) => {
		e.preventDefault()
		const newMovie = {
			name,
			viewers: views,
			fauorite: false,
			id: Date.now(),
		}
		this.setState(({ data }) => {
			const newData = [...data, newMovie]
			return { data: newData }
		})
	}

	onToggleLike = id => {
		console.log(`Toggle like for movie with id: ${id}`)
	}

	onToggleFavourite = id => {
		console.log(`Toggle favourite for movie with id: ${id}`)
	}
	render() {
		const { data } = this.state

		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo />
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList
						onToggleFavourite={this.onToggleFavourite}
						onToggleLike={this.onToggleLike}
						data={data}
						onDelete={this.onDelete}
					/>
					<MoviesAddForm addForm={this.addForm} />
				</div>
			</div>
		)
	}
}

// const App = () => {
// 	const data = [
// 		{ name: 'Empire of usman', viewers: 111, fauorite: true, id: 1 },
// 		{ name: 'Ertugrul', viewers: 122, fauorite: false, id: 2 },
// 		{ name: 'Abdulhamidxon II', viewers: 1000, fauorite: false, id: 3 },
// 	]

// 	return (
// 		<div className='app font-monospace'>
// 			<div className='content'>
// 				<AppInfo />
// 				<div className='search-panel'>
// 					<SearchPanel />
// 					<AppFilter />
// 				</div>
// 				<MovieList data={data} />
// 				<MoviesAddForm />
// 			</div>
// 		</div>
// 	)
// }

export default App
