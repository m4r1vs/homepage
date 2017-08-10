import { h } from 'preact';

// Calculate my current age based on the date
const calculateAge = (year, month, day) => {
	const timestamp = new Date();
	const yearNow = timestamp.getFullYear() + (timestamp.getMonth() / 11) + (timestamp.getDate() / 300);
	return Math.floor(yearNow - (year + (month / 12) + (day / 300)));
};

const commandMarius = command => {
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
        &nbsp;&nbsp;&nbsp;&nbsp;- work<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- contact<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- socialnetorks
				</span>
			);

		case 'skills':
			return (
				<span>
					<h3>Languages I master:</h3>
					<ul>
						<li>JavaScript (ES2015/NodeJS)</li>
						<li>PHP 5</li>
						<li>Python</li>
						<li>HTML</li>
						<li>CSS/SASS/PostCSS</li>
						<li>C++</li>
						<li>C#</li>
					</ul>
					<h3>So I can make:</h3>
					<ul>
						<li>PWA's (Progressive Web Apps)</li>
						<li>Electron Desktop Applications</li>
						<li>RESTful API's</li>
						<li>landing pages</li>
						<li>Serverside Applications</li>
						<li>simple Andoid Apps</li>
					</ul>
          [hint] if you think, I might help you with your project or you have<br />an idea of something you think I can do,<br />use <i>marius contact</i> to contact me :)
				</span>
			);

		case 'toolbelt':
			return (
				<span>TOOLBELT</span>
			);

		case 'general':
			return (
				<span>Hi, I'm Marius, {calculateAge(2001, 11, 22)} years old. And currently living and studying in Hamburg.</span>
			);

		case 'work':
			return (
				<span>WORK</span>
			);

		case 'contact':
			return (
				<span>CONTACT</span>
			);

		case 'socialnetorks':
			return (
				<span>SOCIAL</span>
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

export default commandMarius;
