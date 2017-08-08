import { h, Component } from 'preact';
import style from './style';

export default class Main extends Component {
		state = {
			commandList: [{
				command: 'sudo apt-get install MariusCLI@v0.2.1',
				response: <span>hello world</span>
			}],
			path: 'user@niver.me as root $  ',
			input: String
		}

		parent = this.props.state;

		changeText = e => {
			this.setState({ input: e.target.value });
		}

		handleEnter = e => {
			e.preventDefault();
			const command = this.state.input;
			let response = 'command unknown';
			switch (command) {
				case 'marius help':
					response = (
						<span>
							<span style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
								___  ___           _           _____  _     _____ <br />
								|  \/  |          (_)         /  __ \| |   |_   _|<br />
								| .  . | __ _ _ __ _ _   _ ___| /  \/| |     | |  <br />
								| |\/| |/ _` | '__| | | | / __| |    | |     | |  <br />
								| |  | | (_| | |  | | |_| \__ \ \__/\| |_____| |_ <br />
								\_|  |_/\__,_|_|  |_|\__,_|___/\____/\_____/\___/ <br />
							</span>
							<br />Usage: <i>marius [command]</i><br /><br />
							Where <i>[command]</i> is one of following:<br />
							&nbsp;&nbsp;&nbsp;&nbsp;- help<br />
							&nbsp;&nbsp;&nbsp;&nbsp;- skills<br />
							&nbsp;&nbsp;&nbsp;&nbsp;- toolbelt<br />
							&nbsp;&nbsp;&nbsp;&nbsp;- general<br />
							&nbsp;&nbsp;&nbsp;&nbsp;- work<br />							&nbsp;&nbsp;&nbsp;&nbsp;- contact<br />
							&nbsp;&nbsp;&nbsp;&nbsp;- socialnetorks
						</span>
					);
					break;
				default:
					response = 'command unknown';
			}
			this.setState({ input: '' }); // clear state
			e.target.children.input.value = ''; // clear Input
			this.setState({ commandList:
				this.state.commandList.concat([
					{
						command,
						response
					}
				]) // add command to commandList
			});
			e.target.children.input.focus();
		}

		handleArrowKeys = e => {
			if (e.key === 'ArrowUp');
			if (e.key === 'ArrowDown');
		}

		focusInput = e => {
			this.consoleInput.focus();
		}

		render() {
			return (
				<main onKeyDown={this.handleArrowKeys} onClick={this.focusInput} class={style.main}>

					{this.state.commandList.map((commandList) =>
						<span>{this.state.path}{commandList.command}<br />{commandList.response}<br /><br /></span>
					)}
					<span>{this.state.path}{this.state.input}<span class={style.cursor}>_</span></span>
					<form onSubmit={this.handleEnter}>
						<input
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
