import { PlugState, store } from '@/store';

export const Plug = window.ic?.plug;

export const getPlugIfConnected = (): typeof Plug | undefined =>
	store.getState().plug.state === PlugState.Connected ? Plug : undefined;
