import InfoBoardItemContainer from "./InfoBoardItemContainer";
import styles from "../styles/InfoBoard.module.scss";

interface InfoBoardProps {
  howToEat: string,
  ingredient:string,
  describe: string,
}
export default function InfoBoard({howToEat,ingredient,describe}:InfoBoardProps) {
	return (
		<article className={styles.conatiner}>
			<InfoBoardItemContainer title="👍 이런 분에게 추천합니다!">
				{describe}
			</InfoBoardItemContainer>
			<InfoBoardItemContainer title="💊 함량 성분" hasMoreBtn>
				{ingredient}
			</InfoBoardItemContainer>
			<InfoBoardItemContainer title="🕛 복용 방법 & 시간">
				{howToEat}
			</InfoBoardItemContainer>
		</article>
	);
}
