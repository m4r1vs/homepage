import { h, Component } from 'preact';
import style from './style';
import handleCommand from './functions/handleCommands';

export default class Main extends Component {

		changeText = e => {
			this.props.setState({ input: this.consoleInput.value });
		}

		handleEnter = e => {
			e.preventDefault();
			handleCommand(
				this.props.state.input,
				this.consoleInput,
				this.props.state,
				this.props.setState
			);
			this.focusInput();
		}

		handleKeyPress = e => {
			if (e.key !== 'Enter') {
				this.keyPressElem.currentTime = 0;
				this.keyPressElem.play();
			}
			if (e.key === 'ArrowUp');
			if (e.key === 'ArrowDown');
		}

		getYear = () => {
			const year = new Date();
			return year.getFullYear();
		}

		focusInput = () => {
			this.consoleInput.focus();
		}

		componentDidUpdate = () => {
			window.scrollTo(0,document.body.scrollHeight);
		}

		render() {
			return (
				<main
					onKeyDown={this.handleKeyPress}
					onClick={this.focusInput}
					class={style.main}
				>

					NiveriOS [Version 1.3.6]<br />
					(c) {this.getYear()} Marius Niveri. All rights reserved.<br /><br />
					{this.props.state.commandList.map((commandList) =>
						<span>{this.props.state.path}{commandList.command}<br />{commandList.response}</span>
					)}

					<audio
						ref={(audio) => {this.keyPressElem = audio;}}
						src="../../assets/keyPress.mp3"
						autostart="false"
					/>

					<span style={{ display: this.props.state.inputVisible ? 'block':'none' }}>{this.props.state.path}{this.props.state.input}
						<span class={style.cursor}>_</span>
					</span>

					<form onSubmit={this.handleEnter}>
						<input
							name={Math.random() + '-input'}
							ref={(input) => {this.consoleInput = input;}}
							autoComplete={false}
							id="input"
							type="text"
							onInput={this.changeText}
							autoFocus
						/>
					</form>

				</main>
			);
		}
}
