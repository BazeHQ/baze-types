// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getEnumValuesAsArray( e: any ) {
	const objectKeys: Array<string> = Object.keys( e );
	return objectKeys.map( key => e[key] );
}