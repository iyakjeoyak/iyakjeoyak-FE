export default function getArrayRandomElement(array: any[]) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}
