import BlankBox from "@/components/BlankBox";
import { MedicineItemType } from "@/types";
import SpeechBubbleIcon from "@/assets/icons/SpeechBubbleIcon";
import TagCommon from "@/components/Tag";
import { getAccessToken } from "@/utils/getToken";
import styles from "../styles/CuratingBoardItem.module.scss";
import { useNavigate } from "react-router-dom";

const CuratingBoardItem = ({ medicine }: { medicine: MedicineItemType }) => {
	const isLogin = getAccessToken();

	const navigate = useNavigate();

	return (
		<>
			{!isLogin && (
				<div className={styles["blank-conatiner"]}>
					<BlankBox text="로그인하고 맞춤 영양제를 추천받으세요" />
					<button
						onClick={() => {
							navigate("/login");
						}}
					>
						로그인 하러가기
					</button>
				</div>
			)}
			{isLogin && (
				<div
					className={styles.container}
					onClick={() => {
						navigate(`/detail/${medicine.id}`);
					}}
				>
					<div>
						<img
							src={medicine?.image?.fullPath ?? "/images/no_medicine_img.jpg"}
							alt="약 이름"
							width={110}
							height={120}
						/>
						<SpeechBubbleIcon
							className={styles.speech}
							color="#23cc87"
							text="이 제품은 어때요?"
						/>
					</div>
					<div className={styles["content-container"]}>
						<div>{medicine.prdlst_NM}</div>
						<div className={styles["tag-container"]}>
							{medicine.hashtags.map((tag) => (
								<TagCommon key={tag.id} text={tag.name} />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CuratingBoardItem;
