import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch }        from 'react-redux';
import { useMemo }            from 'react';

export function useActions<T>(actions: T, deps: any[] = []): T {
	const dispatch = useDispatch();

	return useMemo(
		() => {
			if (Array.isArray(actions)) {
				return actions.map(a => bindActionCreators(a, dispatch));
			}

			return bindActionCreators(actions as any, dispatch);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		deps ? [ dispatch, ...deps ] : [ dispatch ]
	) as T;
}
