import { h, Component } from 'preact';
import style from './style';

export default class Main extends Component {
		state = {
			input: '',
			history: ['<span>I\'m glad you made it here. To find out more about me, type "help"</span>']
		}

		changeText = e => {
			this.setState({ input: e.target.value });
		}

		handleEnter = e => {
			e.preventDefault();
			const command = this.state.input;
			this.setState({ input: '' });
			e.target.children.input.value = '';
			if (command === 'help') ;
		}

		render() {
			return (
				<main class={style.main}>
					Hello {this.props.me.given_name}!<br />
					You are {this.props.me.age} years old. <br />
					<span onClick={this.onInput}>click me!</span>
					<form onSubmit={this.handleEnter}>
						<input id="input" type="text" onInput={this.changeText} autoFocus />
					</form>
					<span>$  {this.state.input}<span class={style.cursor}>_</span></span>
				</main>
			);
		}
}
