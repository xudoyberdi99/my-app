import './search-panel.css'
import { Component } from 'react'

class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
		}
	}

	updateTermHandler = e => {
		const term = e.target.value.toLowerCase()
		this.setState({ term })
		this.props.updateTermHandler(term)
	}

	render() {
		return (
			<input
				type='text'
				className='form-control search-input'
				placeholder='kinolarni qidirish'
				onChange={this.updateTermHandler}
				value={this.state.term}
			/>
		)
	}
}
// const SearchPanel = () => {
// 	return (
// 		<input
// 			type='text'
// 			className='form-control search-input'
// 			placeholder='kinolarni qidirish'
// 		/>
// 	)
// }

export default SearchPanel
