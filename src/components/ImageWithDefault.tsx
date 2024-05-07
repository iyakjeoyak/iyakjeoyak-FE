import { useState } from "react";

interface ImageWithFallbackProps
	extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string | undefined;
	defaultSrc: string;
}

const ImageWithDefault = ({
	src,
	defaultSrc,
	...props
}: ImageWithFallbackProps) => {
	const [imageSrc, setImageSrc] = useState(src);

	const handleImageError = () => {
		if (imageSrc !== defaultSrc) {
			setImageSrc(defaultSrc);
		}
	};

	return <img src={imageSrc} onError={handleImageError} {...props} />;
};

export default ImageWithDefault;
