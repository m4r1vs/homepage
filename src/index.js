import './style';
import App from './components/app';
import PreLoader from './components/preLoader';

let Result = <span>error</span>;

if (typeof window !== 'undefined') Result = App;
else Result = PreLoader;

export default Result;
