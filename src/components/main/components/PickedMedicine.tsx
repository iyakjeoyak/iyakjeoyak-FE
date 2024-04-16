import styles from "../styles/PickedMedicine.module.scss";

export default function PickedMedicine() {
	return (
		<article className={styles.container}>
			<div>
				MD's <span>pick</span>
			</div>
			<div>
				<div>이미지</div>
				<div>
					<div>브랜드명</div>
					<div>베이직 뉴트리먼트 푸퍼 데이</div>
				</div>
			</div>
		</article>
	);
}
