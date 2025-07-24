import './App.css'

import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'

const App = () => {
	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
			</div>
		</div>
	)
}

export default App
