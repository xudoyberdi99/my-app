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
			term: '',
			filter: 'all',
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
			like: false,
			id: Date.now(),
		}
		this.setState(({ data }) => {
			const newData = [...data, newMovie]
			return { data: newData }
		})
	}

	onToggleProp = (id, prop) => {
		console.log(prop)

		this.setState(({ data }) => {
			const newArr = data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			})
			return { data: newArr }
		})
	}

	searchHandler = (arr, term) => {
		if (term.length === 0) {
			return arr
		}
		return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
	}

	filterHandler = (arr, filter) => {
		switch (filter) {
			case 'popular':
				return arr.filter(item => item.like)
			case 'mostviewed':
				return arr.filter(item => item.viewers > 200)
			default:
				return arr
		}
	}

	updateTermHandler = term => this.setState({ term })

	updateFilterHandler = filter => this.setState({ filter })

	render() {
		const { data, term, filter } = this.state
		const allMoviesCount = data.length
		const likedMoviesCount = data.filter(item => item.fauorite).length
		const visibleData = this.filterHandler(
			this.searchHandler(data, term),
			filter
		)

		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo
						allMoviesCount={allMoviesCount}
						likedMoviesCount={likedMoviesCount}
					/>
					<div className='search-panel'>
						<SearchPanel updateTermHandler={this.updateTermHandler} />
						<AppFilter
							filter={filter}
							updateFilterHandler={this.updateFilterHandler}
						/>
					</div>
					<MovieList
						onToggleProp={this.onToggleProp}
						data={visibleData}
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
