import styles from "@/components/Form/ImgInput/index.module.scss";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiPlusCircle } from "react-icons/fi";

interface ImgInput {
	name: string;
	title?: string;
}
export const ImgInput = ({ name, title }: ImgInput) => {
	const { register, watch } = useFormContext();
	// 이미지 미리보기 URL 상태 관리
	const [previewUrl, setPreviewUrl] = useState<string | undefined>();

	const fileList = watch(name);
	console.log("file", fileList);
	// file url로 변환
	useEffect(() => {
		if (fileList && fileList.length > 0) {
			const file = fileList[0];
			if (file instanceof File) {
				const reader = new FileReader();
				reader.onload = () => {
					if (typeof reader.result === "string") {
						setPreviewUrl(reader.result);
					}
				};
				reader.readAsDataURL(file);
			}
		}
	}, [fileList]);

	return (
		<div className={styles.profilePicEdit}>
			{title && <div className={styles.ImgTitle}>{title}</div>}
			<div className={styles.imgWrap}>
				<input
					type="file"
					accept="image/*"
					style={{ display: "none" }}
					{...register(name)}
					id="fileupload"
				/>
				<div className={styles.imgBox}>
					<label htmlFor="fileupload" className={styles.imgLabel}>
						{previewUrl ? "" : <FiPlusCircle />}
					</label>
					<div className={styles.imgCon}>
						{previewUrl && (
							<img
								src={previewUrl}
								alt="사용자 프로필"
								className={styles.userProfile}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

{
	/* <img
				className={
					profileImage === defaultImage
						? style.defaultProfile
						: style.userProfile
				}
				src={profileImage}
				alt="사용자 프로필"
				onClick={handleImageClick}
			/> */
}
