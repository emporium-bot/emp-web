import { useCallback, useMemo } from 'react';
import { plugActions, useAppDispatch, usePlugStore } from '@/store';
import { Button } from '../core';

export const PlugButton: React.FC = () => {
	const dispatch = useAppDispatch();
	const { principalId } = usePlugStore();

	const clickHandler = useCallback(() => {
		if (principalId) {
			dispatch(plugActions.disconnect());
		} else {
			dispatch(plugActions.connect());
		}
	}, [principalId, dispatch]);

	const buttonText = useMemo(() => {
		if (principalId) {
			return principalId;
		}
		return 'Connect';
	}, [principalId]);

	return <Button onClick={clickHandler}>{buttonText}</Button>;
};
