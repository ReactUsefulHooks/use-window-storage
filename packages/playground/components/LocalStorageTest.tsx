import React from 'react';
import { useWindowStorage } from '@react-useful-hooks/use-window-storage';

export default function LocalStorageTest() {
	const { localStorage } = useWindowStorage<{ eddie_test: string }, {}>();
	return (
		<section>
			<h1>
				Local Storage: <strong>{localStorage.get('eddie_test')}</strong>
			</h1>
			<button
				onClick={() => localStorage.set('eddie_test', `${Math.random()}`)}
			>
				change
			</button>
			<button onClick={() => localStorage.clear('eddie_test')}>clear</button>
		</section>
	);
}
