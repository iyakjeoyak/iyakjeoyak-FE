import styles from "../styles/SelectedKeywordTagsList.module.scss";
import useGetURLSearch from "@/hooks/useGetURLSearch";
import { useNavigate } from "react-router-dom";

export default function SelectedKeywordTagsList() {
	const navigate = useNavigate();
	// props 전달 필요없이 외부랑 URL로 props 상태 공유
	// 뒤로가기를 이렇게 해도 되나?
	const currentSearchKeywordValue = useGetURLSearch("keyword");

	if (!currentSearchKeywordValue) return null;

	return (
		<div className={styles.container}>
			<div className={styles.tag}>
				{currentSearchKeywordValue}
				<span
					onClick={() => {
						navigate("/search");
					}}
				>
					X
				</span>
			</div>
		</div>
	);
}
