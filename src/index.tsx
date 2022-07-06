import ReactDOM from 'react-dom';
import { App } from '@/app';
import { ThemeProvider } from './theme';

ReactDOM.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	document.getElementById('app-root')
);
