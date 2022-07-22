import { createAsyncThunk } from '@reduxjs/toolkit';
import { plugSlice, PlugState } from '../plug-slice';
import { Plug } from '@/integrations';
import { env } from '@/constants';
import { AppLog } from '@/utils';
import { RootState } from '@/store/store';
import { disconnect } from './disconnect';

export const connect = createAsyncThunk<void>(
  'plug/connect',
  async (_, { dispatch, getState }): Promise<void> => {
    if ((getState() as RootState).plug.state === PlugState.Loading) return;
    dispatch(plugSlice.actions.setState(PlugState.Loading));

    if (Plug) {
      try {
        const accountChangeCallback = async (
          newPrincipalId: string
        ): Promise<void> => {
          AppLog.warn(`Connected to Plug with principal ${newPrincipalId}`);
          dispatch(plugSlice.actions.setPrincipalId(newPrincipalId));
        };

        await Plug.requestConnect({
          host: env.host,
          whitelist: Object.values(env.canisterId),
          onConnectionUpdate: (data) => {
            if (!data.sessionData) {
              return dispatch(disconnect());
            }
            accountChangeCallback(data.sessionData.principalId);
          },
        });

        const principal = await Plug.getPrincipal();
        await accountChangeCallback(
          typeof principal === 'string' ? principal : principal.toText()
        );
      } catch (e) {
        AppLog.error('Could not connect to Plug', e);
        dispatch(plugSlice.actions.setState(PlugState.Disconnected));
      }
    } else {
      dispatch(plugSlice.actions.setState(PlugState.NotInstalled));
    }
  }
);
