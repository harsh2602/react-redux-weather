import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Map from '../components/Map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}>
				<td><Map lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color='orange' units='&#8451;' /></td>
				<td><Chart data={pressures} color='black' units='hPa' /></td>
				<td><Chart data={humidities} color='blue' units='%' /></td>
			</tr>
		)
	}

	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (&#8451;)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// Pass on the reducer of concern here: Coming down from combineReducers
function mapStateToProps({ weather }) {
	return {
		weather
	}
}

export default connect(mapStateToProps)(WeatherList);
