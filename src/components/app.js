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
		version: 'v1.1.0',
		commandList: [],
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
			},
			{
				name: 'wallpaper/linux.jpg',
				content: <img src="../assets/wallpaper/linux.jpg" id="img_of_me" />,
				sudoRequired: false
			},
			{
				name: 'wallpaper/niveri.jpg',
				content: <img src="../assets/wallpaper/niveri.jpg" id="img_of_me" />,
				sudoRequired: false
			},
			{
				name: 'wallpaper/src.jpg',
				content: <img src="../assets/wallpaper/src.jpg" id="img_of_me" />,
				sudoRequired: false
			},
			{
				name: 'wallpaper/xp.jpg',
				content: <img src="../assets/wallpaper/xp.jpg" id="img_of_me" />,
				sudoRequired: false
			}
		]
	}

	setStateFunction = state => {
		this.setState(state);
	}
	[{
		command: 'cat README.md',
		response: <span><br />[cat] <b>content of README.md:</b><br />{readme}<br /><br /></span>
	}]
	powerUp = e => {
		this.setState({ input: '', commandList: [] });
		document.getElementById('byeTxt').style.opacity = 0;
		setTimeout(() => {
			document.getElementById('poweringup').style.display = 'block';
			document.getElementById('poweringup').style.opacity = 1;
			document.getElementById('byeTxt').style.display = 'none';
			setTimeout(() => {
				document.getElementById('poweringup').style.opacity = 0;
				document.getElementById('wrapper').style.opacity = 0;
				document.getElementById('wrapper').style.display = 'block';
				document.getElementById('wrapper').style.opacity = 1;
				document.getElementById('terminal').style.opacity = 0;
				setTimeout(() => {
					document.getElementById('poweringup').style.display = 'none';
					document.getElementById('terminal').style.display = 'block';
					document.getElementById('terminal').style.opacity = 1;
					document.getElementById('topBar').style.opacity = 0;
					document.getElementById('topBar').style.display = 'block';
					document.getElementById('topBar').style.opacity = 1;
				}, 1200);
			}, 4050);
		}, 500);
	}

	componentDidMount = () => {
		setTimeout(() => {
			document.getElementById('byeTxt').style.opacity = 1;
		}, 750);
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
				<div id="onlyonlarge">
					<center>
						<h1 id="byeTxt">Welcome :)<br /><span>NiveriOS [version 1.3.6]</span><br /><br /><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQ3NS4wODUgNDc1LjA4NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc1LjA4NSA0NzUuMDg1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIzNy41NDUsMjU1LjgxNmM5Ljg5OSwwLDE4LjQ2OC0zLjYwOSwyNS42OTYtMTAuODQ4YzcuMjMtNy4yMjksMTAuODU0LTE1Ljc5OSwxMC44NTQtMjUuNjk0VjM2LjU0NyAgICBjMC05LjktMy42Mi0xOC40NjQtMTAuODU0LTI1LjY5M0MyNTYuMDE0LDMuNjE3LDI0Ny40NDQsMCwyMzcuNTQ1LDBjLTkuOSwwLTE4LjQ2NCwzLjYyMS0yNS42OTcsMTAuODU0ICAgIGMtNy4yMzMsNy4yMjktMTAuODUsMTUuNzk3LTEwLjg1LDI1LjY5M3YxODIuNzI4YzAsOS44OTUsMy42MTcsMTguNDY0LDEwLjg1LDI1LjY5NCAgICBDMjE5LjA4MSwyNTIuMjA3LDIyNy42NDgsMjU1LjgxNiwyMzcuNTQ1LDI1NS44MTZ6IiBmaWxsPSIjMDBmZjAwIi8+CgkJPHBhdGggZD0iTTQzMy44MzYsMTU3Ljg4N2MtMTUuMzI1LTMwLjY0Mi0zNi44NzgtNTYuMzM5LTY0LjY2Ni03Ny4wODRjLTcuOTk0LTYuMDktMTcuMDM1LTguNDctMjcuMTIzLTcuMTM5ICAgIGMtMTAuMDg5LDEuMzMzLTE4LjA4Myw2LjA5MS0yMy45ODMsMTQuMjczYy02LjA5MSw3Ljk5My04LjQxOCwxNi45ODYtNi45OTQsMjYuOTc5YzEuNDIzLDkuOTk4LDYuMTM5LDE4LjAzNywxNC4xMzMsMjQuMTI4ICAgIGMxOC42NDUsMTQuMDg0LDMzLjA3MiwzMS4zMTIsNDMuMjUsNTEuNjc4YzEwLjE4NCwyMC4zNjQsMTUuMjcsNDIuMDY1LDE1LjI3LDY1LjA5MWMwLDE5LjgwMS0zLjg1NCwzOC42ODgtMTEuNTYxLDU2LjY3OCAgICBjLTcuNzA2LDE3Ljk4Ny0xOC4xMywzMy41NDQtMzEuMjY1LDQ2LjY3OWMtMTMuMTM1LDEzLjEzMS0yOC42ODgsMjMuNTUxLTQ2LjY3OCwzMS4yNjFjLTE3Ljk4Nyw3LjcxLTM2Ljg3OCwxMS41Ny01Ni42NzMsMTEuNTcgICAgYy0xOS43OTIsMC0zOC42ODQtMy44Ni01Ni42NzEtMTEuNTdjLTE3Ljk4OS03LjcxLTMzLjU0Ny0xOC4xMy00Ni42ODItMzEuMjYxYy0xMy4xMjktMTMuMTM1LTIzLjU1MS0yOC42OTEtMzEuMjYxLTQ2LjY3OSAgICBjLTcuNzA4LTE3Ljk5LTExLjU2My0zNi44NzctMTEuNTYzLTU2LjY3OGMwLTIzLjAyNiw1LjA5Mi00NC43MjQsMTUuMjc0LTY1LjA5MWMxMC4xODMtMjAuMzY0LDI0LjYwMS0zNy41OTEsNDMuMjUzLTUxLjY3OCAgICBjNy45OTQtNi4wOTUsMTIuNzAzLTE0LjEzMywxNC4xMzMtMjQuMTI4YzEuNDI3LTkuOTg5LTAuOTAzLTE4Ljk4Ni02Ljk5NS0yNi45NzljLTUuOTAxLTguMTgyLTEzLjg0NC0xMi45NDEtMjMuODM5LTE0LjI3MyAgICBjLTkuOTk0LTEuMzMyLTE5LjA4NSwxLjA0OS0yNy4yNjgsNy4xMzljLTI3Ljc5MiwyMC43NDUtNDkuMzQ0LDQ2LjQ0Mi02NC42NjksNzcuMDg0Yy0xNS4zMjQsMzAuNjQ2LTIyLjk4Myw2My4yODgtMjIuOTgzLDk3LjkyNyAgICBjMCwyOS42OTcsNS44MDYsNTguMDU0LDE3LjQxNSw4NS4wODJjMTEuNjEzLDI3LjAyOCwyNy4yMTgsNTAuMzQsNDYuODI2LDY5Ljk0OGMxOS42MDIsMTkuNjAzLDQyLjkxOSwzNS4yMTUsNjkuOTQ5LDQ2LjgxNSAgICBjMjcuMDI4LDExLjYxNSw1NS4zODgsMTcuNDI2LDg1LjA4LDE3LjQyNmMyOS42OTMsMCw1OC4wNTItNS44MTEsODUuMDgxLTE3LjQyNmMyNy4wMzEtMTEuNjA0LDUwLjM0Ny0yNy4yMTMsNjkuOTUyLTQ2LjgxNSAgICBjMTkuNjAyLTE5LjYwMiwzNS4yMDctNDIuOTIsNDYuODE4LTY5Ljk0OHMxNy40MTItNTUuMzkyLDE3LjQxMi04NS4wODJDNDU2LjgwOSwyMjEuMTc0LDQ0OS4xNiwxODguNTMyLDQzMy44MzYsMTU3Ljg4N3oiIGZpbGw9IiMwMGZmMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" title="Power up" alt="Power up!" onClick={this.powerUp} /></h1>
						<h2 id="poweringup">powering up..</h2>
					</center>
					<TopBar />
					<main id="wrapper">
						<Terminal
							state={this.state}
							setState={this.setStateFunction}
						/>
						<center>
							<div id="sizealert">
								<h1>Fatal system error!</h1><hr />
								<h3>Seems like you're using NiveriOS on a screen smaller than 820x640px. Please get a bigger screen or go to my <a href="/">homepage</a></h3>
							</div>
						</center>
					</main>
				</div>
			</div>
		);
	}
}
