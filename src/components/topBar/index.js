import { h, Component } from 'preact';
import style from './style';

export default class TopBar extends Component {

		close = () => {
			if (confirm('Oh, you really want to leave?')) {
				window.location.href = 'about:blank';
			}
		}

		render() {
			return (
				<header class={style.header}>
          you@niveri.me as guest - Terminal
					<div onClick={this.close}>x</div>
				</header>
			);
		}
}
