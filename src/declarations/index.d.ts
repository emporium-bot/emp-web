import type { Provider } from '@psychedelic/plug-inpage-provider';
import type { Dispatch, SetStateAction } from 'react';

declare global {
	interface Window {
		ic?: {
			plug?: Provider;
		};
	}

	type ReactState<S> = [S, Dispatch<SetStateAction<S>>];
}

declare module '*.png' {
	const value: any;
	export default value;
}

declare module '*.svg' {
	const value: any;
	export default value;
}
