import { Button } from '@/components';
import { useTheme } from '@/theme';

export const App: React.FC = () => {
	const { toggleTheme } = useTheme();
	return <Button onClick={toggleTheme}>Hello World</Button>;
};
