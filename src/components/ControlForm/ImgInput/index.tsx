import Container from "../Container";
import { FiPlusCircle } from "react-icons/fi";
import getImgPreview from "@/utils/getImgPreview";
import {
	InputHTMLAttributes,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from "react";
import styles from "@/components/Form/ImgInput/index.module.scss";
import ImageWithDefault from "@/components/ImageWithDefault";

interface ImgInput extends InputHTMLAttributes<HTMLInputElement> {
	title?: string;
	initialImage?: string;
	setProfileImageData: (file: File) => void;
}
export const ImgInput = forwardRef<HTMLInputElement, ImgInput>(
	({ title, initialImage, setProfileImageData }: ImgInput, ref) => {
		const defaultImage = "/images/no_profile_image.jpg?url";
		const imgInputRef = useRef<HTMLInputElement>(null);
		const [profileImage, setProfileImage] = useState<string | undefined>(
			initialImage || defaultImage,
		);

		useEffect(() => {
			if (initialImage) {
				setProfileImage(initialImage);
			}
		}, [initialImage]);

		const handleImageClick = () => {
			imgInputRef.current?.click();
		};

		const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0] as File;
			if (file) {
				getImgPreview(file, setProfileImage, setProfileImageData);
			}
		};

		// file url로 변환
		return (
			<Container title={title}>
				<input
					type="file"
					accept="image/*"
					style={{ display: "none" }}
					onChange={handleFileChange}
					id="fileupload"
					ref={ref}
				/>
				<div className={styles.imgBox}>
					<label
						htmlFor="fileupload"
						className={styles.imgLabel}
						onClick={handleImageClick}
					>
						{profileImage ? "" : <FiPlusCircle />}
					</label>
					<div className={styles.imgCon}>
						{profileImage ? (
							<img
								src={profileImage}
								alt="사용자 프로필"
								className={styles.userProfile}
							/>
						) : (
							<ImageWithDefault
								src={profileImage}
								defaultSrc={defaultImage}
								alt="사용자 프로필"
								className={styles.userProfile}
								onClick={handleImageClick}
							/>
						)}
					</div>
				</div>
			</Container>
		);
	},
);
