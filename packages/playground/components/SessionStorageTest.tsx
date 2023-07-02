import React from 'react';
import { useWindowStorage } from '@react-useful-hooks/use-window-storage';

export default function SessionStorageTest() {
	const { sessionStorage } = useWindowStorage<{}, { eddie_test: string }>();
	return (
		<section>
			<h1>Session Storage: {sessionStorage.get('eddie_test')}</h1>
			<button
				onClick={() => sessionStorage.set('eddie_test', `${Math.random()}`)}
			>
				change
			</button>
			<button onClick={() => sessionStorage.clear('eddie_test')}>clear</button>
		</section>
	);
}
