import ReactDOM from 'react-dom';
import { Registration } from '@/app';
import { ThemeProvider } from './theme';

ReactDOM.render(
	<ThemeProvider>
		<Registration />
	</ThemeProvider>,
	document.getElementById('app-root')
);
