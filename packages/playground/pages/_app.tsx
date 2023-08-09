import '../components/index.css'
import type { AppProps } from 'next/app';
import { WindowStorageProvider } from '@react-useful-hooks/use-window-storage';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WindowStorageProvider>
			<Component {...pageProps} />
		</WindowStorageProvider>
	);
}
