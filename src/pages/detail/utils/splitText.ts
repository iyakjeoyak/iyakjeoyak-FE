export default function splitText(text: string, joiner = "\n") {
	const splitText = text.split(joiner).filter((item) => item !== "");
	return splitText;
}
