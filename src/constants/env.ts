export const env = {
	host:
		(import.meta.env.VITE_HOST as string) ||
		'https://mainnet.dfinity.network',
};
