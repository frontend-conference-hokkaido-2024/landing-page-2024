declare module 'process' {
	global {
		namespace NodeJS {
			interface ProcessEnv {
				readonly FORTEE_API_HOST: string;
			}
		}
	}
}