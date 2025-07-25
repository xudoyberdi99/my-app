import './movies-add-form.css'

const MoviesAddForm = () => {
	return (
		<div className='movies-add-form'>
			<h3>Yangi kino qo'shish</h3>
			<form className='add-form d-flex'>
				<input
					type='text'
					className='form-control new-post-label'
					placeholder='qanday kino?'
				/>
				<input
					type='number'
					className='form-control new-post-label'
					placeholder='nechi marotaba korilgan?'
				/>
				<button type='submit' className='btn btn-outline-dark'>
					Qo'shish
				</button>
			</form>
		</div>
	)
}

export default MoviesAddForm
