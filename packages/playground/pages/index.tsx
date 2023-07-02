import LocalStorageTest from '@/components/LocalStorageTest';
import SessionStorageTest from '@/components/SessionStorageTest';

export default function Home() {
	return (
		<>
			<LocalStorageTest />
			<SessionStorageTest />
		</>
	);
}
