import InfoBoardItemContainer from "./InfoBoardItemContainer";
import styles from "../styles/InfoBoard.module.scss";

export default function InfoBoard() {
	return (
		<article className={styles.conatiner}>
			<InfoBoardItemContainer title="👍 이런 분에게 추천합니다!">
				내용
			</InfoBoardItemContainer>
			<InfoBoardItemContainer title="💊 함량 성분" hasMoreBtn>
				내용
			</InfoBoardItemContainer>
			<InfoBoardItemContainer title="🕛 복용 방법 & 시간">
				내용
			</InfoBoardItemContainer>
		</article>
	);
}
