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
			else {
				this.handleEnter(e);
			}
			if (e.key === 'ArrowUp');
			if (e.key === 'ArrowDown');
			this.focusInput();
		}

		getYear = () => {
			const year = new Date();
			return year.getFullYear();
		}

		focusInput = () => {
			this.consoleInput.focus();
		}

		componentDidUpdate = () => {
			document.getElementById('terminal').scrollTo(0,document.getElementById('terminal').scrollHeight);
			this.focusInput();
		}

		render() {
			return (
				<div
					id="terminal"
					onKeyDown={this.handleKeyPress}
					onClick={this.focusInput}
					class={style.main}
				>

					NiveriOS [Version 1.3.6]<br />
					(c) {this.getYear()} Marius Niveri. Licensed under MIT.<br /><br />
					{this.props.state.commandList.map((commandList) =>
						<span>{this.props.state.path}{commandList.command}<br /><span class={style.history}>{commandList.response}</span></span>
					)}

					<audio
						ref={(audio) => {this.keyPressElem = audio;}}
						src="../../assets/keyPress.mp3"
						autostart="false"
					/>

					<span style={{ display: this.props.state.inputVisible ? 'inline-block':'none', width: '258px', marginBottom: '10px' }}>{this.props.state.path}

					</span>

					<input
						name={Math.random() + '-input'}
						ref={(input) => {this.consoleInput = input;}}
						autoComplete={false}
						id="input"
						type="text"
						onInput={this.changeText}
						autoFocus
						style={{ display: this.props.state.inputVisible ? 'inline-block':'none' }}
					/>

				</div>
			);
		}
}
