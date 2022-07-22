import { Button, PlugButton } from '@/components';
import { useTheme } from '@/theme';
import { usePlugInit } from './integrations';

export const App: React.FC = () => {
	usePlugInit();
	const { toggleTheme } = useTheme();

	return (
		<>
			<Button onClick={toggleTheme}>Toggle Theme</Button>
			<PlugButton />
		</>
	);
};
