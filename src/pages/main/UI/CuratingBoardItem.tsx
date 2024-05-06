import TagCommon from "@/components/Tag";
import styles from "../styles/CuratingBoardItem.module.scss";

const CuratingBoardItem = () => {
	return (
		<div className={styles.container}>
			<div>
				<img
					src="/images/no_medicine_img.jpg"
					alt="약 이름"
					width={100}
					height={130}
				/>
				<div>이 제품은 어때요?</div>
			</div>
			<div className={styles["tag-conatiner"]}>
				<TagCommon text="간 건강" />
				<TagCommon text="간 건강" />
				<TagCommon text="간 건강" />
				<TagCommon text="간 건강" />
				<TagCommon text="간 건강" />
				<TagCommon text="간 건강" />
				<TagCommon text="간 건강" />
				<TagCommon text="간 건강" />
			</div>
		</div>
	);
};

export default CuratingBoardItem;
