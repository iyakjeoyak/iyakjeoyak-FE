import BlankBox from "@/components/BlankBox";
import TagCommon from "@/components/Tag";
import { getAccessToken } from "@/utils/getToken";
import styles from "../styles/CuratingBoardItem.module.scss";

const CuratingBoardItem = () => {
	const isLogin = getAccessToken();

	return (
		<>
			{!isLogin && (
				<div className={styles["blank-conatiner"]}>
					<BlankBox text="로그인하고 맞춤 영양제를 추천받으세요" />
					<button>로그인 하러가기</button>
				</div>
			)}
			{isLogin && (
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
			)}
		</>
	);
};

export default CuratingBoardItem;
