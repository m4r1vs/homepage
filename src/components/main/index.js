import { h, Component } from 'preact';
import style from './style';
import commandHandler from '../../commands';

export default class Main extends Component {

		changeText = e => {
			this.props.setState({ input: e.target.value });
		}

		handleEnter = e => {
			e.preventDefault();
			const command = this.props.state.input;
			let response = 'command unknown';
			if (typeof command === 'string' && command !== '') {

				switch (command.split(' ')[0]) {

					case 'marius':
						if (this.props.state.installed) response = commandHandler(command);
						else response = <span><i>MariusCLI</i> is currently not installed, install it by typing 'apt install marius-cli'</span>;
						break;

					case 'cat':
						if (command.split(' ')[1] === 'readme.md' || command.split(' ')[1] === 'README.md') {
							response = (<span>
								Hi, this is my homepage, portfolio, website or whatever to call it.<br />Because I like bash and terminals in general, I build this page like one.<br />To get started type <i>apt install marius-cli</i> ;)
							</span>);
						}
						else if (command.split(' ')[1] === 'desktop.ini' || command.split(' ')[1] === 'DESKTOP.ini') {
							response = <span>[cat] you don't seem to have the permissions to read 'desktop.ini'.</span>;
						}
						else {
							response = <span>[cat] cannot find given file :/</span>;
						}
						break;

					case 'ls':
						if (command.split(' ').length >= 2) {
							response = <span>[list] usage: <i>ls</i></span>;
						}
						else {
							response = <span>README.md  desktop.ini</span>;
						}
						break;

					case 'sudo':
						response = <span>[sudo] What the hell are you actually doing here? Remember, you are the guest here!</span>;
						break;

					case 'c':
						this.props.setState({ commandList: [] });
						response = <span>[clear] cleared the history succesfully</span>;
						break;

					case 'apt':
						if (command.split(' ')[1] === 'install') {
							if (command.split(' ')[2] === 'marius-cli') {
								if (this.props.state.installed) {
									response = <span>[apt] You have already installed MariusCLI.</span>;
								}
								else {
									this.props.setState({ installed: true });
									response = (
										<span>
										Installing MariusCLI {this.props.state.version} to computer... [100%] <br />
										Finished. You can now start using MariusCLI by typing <i>marius help</i>.
										</span>
									);
								}
							}
							else if (command.split(' ').length <= 2) {
								response = <span>[apt] usage: <i>apt install [package]</i></span>;
							}
							else {
								response = <span>[apt] cannot find programe "{command.split(' ')[2]}" </span>;
							}
						}
						else {
							response = <span>[apt] As a guest you are only allowed to use <i>apt install</i>.</span>;
						}
						break;

					default:
						response = (
							<span>
								command not found: {command}
							</span>
						);
				}

				response = (
					<span>
						{response}<br /><br />
					</span>
				);
			}
			else {
				response = null;
			}
			this.props.setState({ input: '' }); // clear state
			e.target.children.input.value = ''; // clear Input
			this.props.setState({ commandList:
				this.props.state.commandList.concat([
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

		componentDidUpdate = () => {
			window.scrollTo(0,document.body.scrollHeight);
		}

		render() {
			return (
				<main onKeyDown={this.handleArrowKeys} onClick={this.focusInput} class={style.main}>

					{this.props.state.commandList.map((commandList) =>
						<span>{this.props.state.path}{commandList.command}<br />{commandList.response}</span>
					)}

					<audio
						ref={(audio) => {this.keyPressElem = audio;}}
						src="../../assets/keyPress.mp3"
						autostart="false"
					/>

					<span>{this.props.state.path}{this.props.state.input}
						<span class={style.cursor}>_</span>
					</span>

					<form onSubmit={this.handleEnter}>
						<input
							name="terminalInput"
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
