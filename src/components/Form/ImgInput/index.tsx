import getImgPreview from "@/utils/getImgPreview";
import { useRef, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import Container from "../Container";
import styles from "@/components/Form/ImgInput/index.module.scss";
import { useController, useFormContext } from "react-hook-form";

interface ImgInput {
	name: string;
	title?: string;
}
export const ImgInput = ({ name, title }: ImgInput) => {
	const { control } = useFormContext();
  const imgInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string | undefined>(
		
	);
	const handleImageClick = () => {
		imgInputRef.current?.click();
	};
	const {
		field: {  onChange: setProfileImageData },
	} = useController({
		control,
		name,
	});
	// file url로 변환
	return (
		<Container title={title} name={name}>
			<input
				type="file"
				accept="image/*"
				style={{ display: "none" }}
				onChange={(event) => {
          const file = event.target.files?.[0] as File;
					if (file) {
						getImgPreview(file, setProfileImage, setProfileImageData);
					}
				}}
				id="fileupload"
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
					{profileImage && (
						<img
							src={profileImage}
							alt="사용자 프로필"
							className={styles.userProfile}
						/>
					)}
				</div>
			</div>
		</Container>
	);
};
