import { h, Component } from 'preact';

import Main from './main';

// Calculate my current age based on the date
const calculateAge = (year, month, day) => {
	const timestamp = new Date();
	const yearNow = timestamp.getFullYear() + (timestamp.getMonth() / 11) + (timestamp.getDate() / 300);
	return yearNow - (year + (month / 12) + (day / 300));
};

export default class App extends Component {

	state = {
		me: {
			given_name: 'Marius',
			family_name: 'Niveri',
			age: calculateAge(2001, 11, 22)
		}
	}

	render() {
		return (
			<div id="app">
				<Main state={this.state} />
			</div>
		);
	}
}
