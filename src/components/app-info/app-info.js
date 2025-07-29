import './app-info.css'

const AppInfo = ({ likedMoviesCount, allMoviesCount }) => {
	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>
				Barcha kinolar soni: {allMoviesCount}
			</p>
			<p className='fs-3 text-uppercase'>
				Ko'rilgan kinolar soni: {likedMoviesCount}
			</p>
		</div>
	)
}

export default AppInfo
