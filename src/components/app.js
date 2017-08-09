import { h, Component } from 'preact';

import Main from './main';
import TopBar from './topBar';

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
		},
		version: 'v1.0.3',
		commandList: [{
			command: 'cat README.md',
			response: (
				<span>
					Hi, this is my homepage, portfolio, website or whatever to call it.<br />Because I like bash and terminals in general, I build this page like one.<br />To get started type <i>apt install marius-cli</i> ;) <br /><br />
				</span>
			)
		}],
		path: 'you@niveri.me as guest $  ',
		installed: false,
		input: String
	}

	setStateCustom = state => {
		this.setState(state);
	}

	componentDidUpdate = () => {
		this.appWrapper.scrollTo(0, this.appWrapper.scrollHeight);
	}

	render() {
		return (
			<div
				id="app"
				ref={(div) => {this.appWrapper = div;}}
			>
				<TopBar />
				<Main state={this.state} setState={this.setStateCustom} />
			</div>
		);
	}
}
