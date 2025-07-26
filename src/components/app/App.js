import './App.css'

import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import MovieList from '../move-list/move-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'

const App = () => {
	const data = [
		{ name: 'Empire of usman', viewers: 111, fauorite: true, id: 1 },
		{ name: 'Ertugrul', viewers: 122, fauorite: false, id: 2 },
		{ name: 'Abdulhamidxon II', viewers: 1000, fauorite: false, id: 3 },
	]

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<MovieList data={data} />
				<MoviesAddForm />
			</div>
		</div>
	)
}

export default App
