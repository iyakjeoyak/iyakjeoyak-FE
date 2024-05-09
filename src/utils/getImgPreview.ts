const getImgPreview = (
	previewImgFile: File,
	setProfileImage: React.Dispatch<React.SetStateAction<string | undefined>>,
	callback: (file: File) => void,
) => {
	const reader = new FileReader();

	reader.onload = (event) => {
		if (typeof reader.result === "string") {
			setProfileImage(event.target?.result as string);
			callback(previewImgFile);
		}
	};
	reader.readAsDataURL(previewImgFile);
};

export default getImgPreview;
