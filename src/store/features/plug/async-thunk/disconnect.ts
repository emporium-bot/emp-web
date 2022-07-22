import { createAsyncThunk } from '@reduxjs/toolkit';
import { plugSlice, PlugState } from '../plug-slice';
import { Plug } from '@/integrations';

export const disconnect = createAsyncThunk<void>(
	'plug/disconnect',
	async (_, { dispatch }): Promise<void> => {
		dispatch(plugSlice.actions.setState(PlugState.Loading));

		if (Plug) {
			dispatch(plugSlice.actions.setState(PlugState.Disconnected));
			Plug.disconnect();
		} else {
			dispatch(plugSlice.actions.setState(PlugState.NotInstalled));
		}
	}
);
