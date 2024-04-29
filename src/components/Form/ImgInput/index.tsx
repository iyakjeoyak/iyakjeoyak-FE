import getImgPreview from "@/utils/getImgPreview";
import { useRef, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import Container from "../Container";
import styles from "@/components/Form/ImgInput/index.module.scss";

interface ImgInput {
	name: string;
	title?: string;
}
export const ImgInput = ({ name, title }: ImgInput) => {
	// 이미지 미리보기 URL 상태 관리
	const [profileImage, setProfileImage] = useState<string | undefined>();
	const imgInputRef = useRef<HTMLInputElement>(null);
	const handleImageClick = () => {
		imgInputRef.current?.click();
	};

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
						getImgPreview(file, setProfileImage, () => {});
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
