import { h, Component } from 'preact';

import Terminal from './terminal';
import TopBar from './topBar';

const getInstalledStage = () => {
	if (typeof window !== 'undefined') {
		if (localStorage.getItem('marius_installed')) return true;
	}
	return false;
};

const readme = (
	<span>
		Hi, this is my homepage, portfolio, website or whatever to call it.<br />Because I like bash and terminals in general, I build this page like one.<br />To get started type <i>niv install marius-cli</i> ;)
	</span>
);

export default class App extends Component {

	state = {
		version: 'v1.0.3',
		commandList: [{
			command: 'cat README.md',
			response: <span><br />[cat] <b>content of README.md:</b><br />{readme}<br /><br /></span>
		}],
		path: 'you@niveri.me as guest $  ',
		installed: getInstalledStage(),
		input: '',
		inputVisible: true,
		fileSystem: [
			{
				name: 'desktop.ini',
				content: <span>How the heck you got here?</span>,
				sudoRequired: true
			},
			{
				name: 'me_the_one_and_only.jpg',
				content: <img src="../assets/me_the_one_and_only.jpg" id="img_of_me" />,
				sudoRequired: false
			},
			{
				name: 'README.md',
				content: readme,
				sudoRequired: false
			},
			{
				name: 'todo.txt',
				content: (<ol>
					<li>eat</li>
					<li>code</li>
					<li>sleep</li>
					<li>repeat</li>
				</ol>),
				sudoRequired: false
			}
		]
	}

	setStateFunction = state => {
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
				<main>
					<Terminal
						state={this.state}
						setState={this.setStateFunction}
					/>
				</main>
			</div>
		);
	}
}
