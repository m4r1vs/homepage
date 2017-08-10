import { h } from 'preact';
import commandMarius from './commandMarius';

const handleCommands = (command, consoleInput, state, setState) => {

	// First make response a variable:
	let response;

	const commandToDisplay = command;

	// Make command to lower case:
	command = command.toLowerCase();

	// Check if command exists to avoid errors:
	if (typeof command === 'string' && command !== '') {

		// Switch the first command ("Marius" when "Marius help"):
		switch (command.split(' ')[0]) {

			case 'marius':

				// If Marius is installed, pass it to commandMarius.js:
				if (state.installed) response = commandMarius(command);
				else response = <span><i>MariusCLI</i> is currently not installed, install it by typing 'niv install marius-cli'</span>;
				break;

			case 'cat':

				if (command.split(' ').length <= 1) {
					response = <span>[cat] usage: 'cat <i>file</i>'</span>;
				}
				else {
					let fileFound = false;
					for (let i = 0; i < state.fileSystem.length; i++) {
						if (command.split(' ')[1] === state.fileSystem[i].name.toLowerCase()) {
							fileFound = true;
							if (state.fileSystem[i].sudoRequired) {
								response = <span>[cat] You don't seem to have permissions to read {state.fileSystem[i].name}</span>;
							}
							else {
								response = <span><br />[cat] <b>content of {state.fileSystem[i].name}:</b><br />{state.fileSystem[i].content}</span>;
							}
						}
					}
					if (!fileFound) response = <span>[cat] can't find file: {command.split(' ')[1]}</span>;
				}
				break;

			case 'ls':
				if (command.split(' ').length >= 2) {
					response = <span>[list] usage: <i>ls</i></span>;
				}
				else {
					let fileList = '';
					for (let i = 0; i < state.fileSystem.length; i++) {
						fileList += state.fileSystem[i].name + '  ';
					}
					response = <span>{fileList}</span>;
				}
				break;

			case 'sudo':
				response = <span>[sudo] What the hell are you actually doing here? Remember, you are the guest here!</span>;
				break;

			case 'help':
				response = (
					<span>
						<br />Welcome to <b>niveri.me</b>, guest. You can use following commands:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;- help: display this message<br />
						&nbsp;&nbsp;&nbsp;&nbsp;- niv: NIV package manager<br />
						&nbsp;&nbsp;&nbsp;&nbsp;- ls: list files in cur. directory<br />
						&nbsp;&nbsp;&nbsp;&nbsp;- clear: clear output<br />
						&nbsp;&nbsp;&nbsp;&nbsp;- cat: echo content of file
					</span>
				);
				break;

			case 'clear':
				setState({ commandList: [] });
				response = <span>[clear] cleared the history succesfully</span>;
				break;

			case 'niv':
				if (command.split(' ')[1] === 'install') {
					if (command.split(' ')[2] === 'marius-cli') {
						if (state.installed) {
							response = <span>[niv] You have already installed MariusCLI.</span>;
						}
						else {

							let commandList = state.commandList;
							setState({ inputVisible: false });
							commandList.push({
								command: commandToDisplay,
								response: <span />
							});

							setState({ commandList });

							for (let i = 1; i <= 11; i++) {
								setTimeout(() => {
									if (i === 11) {
										setState({ inputVisible: true });
										commandList[commandList.length - 1].response = (
											<span>
												Installing MariusCLI {state.version} to computer... [100%]<br />
												installed. You can use <i>MariusCLI</i> now by typing <i>marius help</i> :)
												<br /><br />
											</span>
										);
										setState({ commandList });
									}
									else {
										commandList[commandList.length - 1].response = (
											<span>
												Installing MariusCLI {state.version} to computer... [{i}0%]
												<br /><br />
											</span>
										);
										setState({ commandList });
									}
								},800*i);

							}
							response = 'niv';
							setState({ installed: true });
							if (typeof window !== 'undefined') {
								localStorage.setItem('marius_installed', true);
							}
						}
					}
					else if (command.split(' ').length <= 2) {
						response = <span>[niv] usage: <i>niv install [package]</i></span>;
					}
					else {
						response = <span>[niv] cannot find program "{command.split(' ')[2]}" </span>;
					}
				}
				else {
					response = <span>[niv] As a guest you are only allowed to use <i>niv install</i>.</span>;
				}
				break;

			default:
				response = (
					<span>
						command not found: {command}
					</span>
				);
		}

		if (response !== 'niv') {
			response = (
				<span>
					{response}<br /><br />
				</span>
			);
			let commandList = state.commandList;
			setState({ inputVisible: false });
			commandList.push({
				command: commandToDisplay,
				response: <span />
			});

			setState({ commandList });

			setTimeout(() => {
				commandList[commandList.length - 1].response = response;
				setState({ commandList });
				setTimeout(() => {
					setState({ inputVisible: true });
				}, Math.random() * 500);
			}, Math.random() * 1000);
		}
	}
	else {
		response = null;
		let commandList = state.commandList;
		commandList.push({
			command: commandToDisplay,
			response: <span />
		});

		setState({ commandList });
	}
	setState({ input: '' }); // clear state
	consoleInput.value = ''; // clear Input

};

export default handleCommands;
