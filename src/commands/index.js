import { h } from 'preact';

const commandHandler = (command) => {
	switch (command.split(' ')[1]) {
	  case 'help':
			return (
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
	  default:
			if (command.split(' ').length <= 1) {
				return (
					<span>[MariusCLI] to get help type <i>marius help</i></span>
				);
			}
			return (
				<span>[MariusCLI] cannot find command '{command.split(' ')[1]}'. Use <i>marius help</i> to get a list of all commands :)
				</span>
			);
	}
};

export default commandHandler;
