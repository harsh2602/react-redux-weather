import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		};

		this.onInputChange = this.onInputChange.bind(this); // bind the method to SearchBar
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({
			searchTerm: event.target.value
		});
	}

	onFormSubmit(event) {
		event.preventDefault();

		// Fetch weather data action creator
		this.props.fetchWeather(this.state.searchTerm);
		this.setState({
			searchTerm: ''
		});
	}

	render() {
		return (
			<form
				className='input-group'
				onSubmit={this.onFormSubmit}
			>
				<input
					placeholder='Get a five day forecast for a city'
					className='form-control'
					value={this.state.searchTerm}
					onChange={this.onInputChange}
				/>
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
