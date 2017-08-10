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
					<center>
						<b><div class={style.title}>you@niveri.me as guest - Terminal</div></b>
					</center>
					<div onClick={this.close} class={style.close}>x</div>
				</header>
			);
		}
}
