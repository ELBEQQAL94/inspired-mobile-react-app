export function findElements<T, V>(array: any, property:string): boolean {
	let foundElements: boolean = false;
	foundElements = array.find((entry:any) => entry.name === property);
	return foundElements;
};