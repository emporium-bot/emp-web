import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from '@/app';
import { ThemeProvider } from './theme';
import { store } from './store';

ReactDOM.render(
	<ReduxProvider store={store}>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</ReduxProvider>,
	document.getElementById('app-root')
);
