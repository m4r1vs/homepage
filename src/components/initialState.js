const readme = (
	<span>
		Hi, this is my homepage, portfolio, website or whatever to call it.<br />Because I like bash and terminals in general, I build this page like one.<br />To get started type <i>niv install marius-cli</i> ;)
	</span>
);

const getInstalledStage = () => {
	if (typeof window !== 'undefined') {
		if (localStorage.getItem('marius_installed')) return true;
	}
	return false;
};

const fileSystem = [
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
];

const initialState = {
	version: 'v1.1.0',
	commandList: [],
	path: 'you@niveri.me as guest $  ',
	installed: getInstalledStage(),
	input: '',
	inputVisible: true,
	fileSystem
};

export default initialState;
