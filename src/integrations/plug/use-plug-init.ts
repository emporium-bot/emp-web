import { useEffect } from 'react';

import { plugActions, PlugState, useAppDispatch } from '@/store';

import { Plug } from './plug';

export const usePlugInit = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Plug) {
      dispatch(plugActions.setState(PlugState.Loading));

      new Promise<string>((resolve, reject) => {
        const timeout = setTimeout(reject, 3000);
        Plug?.isConnected()
          .then((isConnected) => {
            if (isConnected && Plug) {
              return Plug.getPrincipal();
            }
            throw new Error('Plug is not connected');
          })
          .then((principal) => {
            const principalId =
              typeof principal === 'string' ? principal : principal.toText();
            clearTimeout(timeout);
            resolve(principalId);
          })
          .catch(reject);
      })
        .then((principalId) =>
          dispatch(plugActions.setPrincipalId(principalId))
        )
        .catch(() => dispatch(plugActions.setState(PlugState.Disconnected)));
    } else {
      dispatch(plugActions.setState(PlugState.NotInstalled));
    }
  }, [dispatch]);
};
