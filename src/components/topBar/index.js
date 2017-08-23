import { h, Component } from 'preact';
import style from './style';

export default class TopBar extends Component {

		close = () => {
			if (confirm('Oh, you really want to leave?')) {
				document.getElementById('terminal').style.opacity = 0;
				document.getElementById('topBar').style.opacity = 0;
				setTimeout(() => {
					document.getElementById('wrapper').style.opacity = 0;
					setTimeout(() => {
						document.getElementById('wrapper').style.display = 'none';
						document.getElementById('byeTxt').style.display = 'block';
						document.getElementById('byeTxt').style.opacity = 1;
					}, 700);
				}, 1000);
			}
		}

		render() {
			return (
				<header class={style.header} id="topBar">
					<center>
						<b><div class={style.title}>you@niveri.me as guest - Terminal</div></b>
					</center>
					<div onClick={this.close} class={style.close}>x</div>
				</header>
			);
		}
}
