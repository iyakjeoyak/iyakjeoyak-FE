import Modal from "@/components/Modal";
import styles from "../styles/ReviewPostModal.module.scss";

export default function ReviewPostModal() {
	return (
		<Modal>
			<Modal.ModalOpenNode
				openElement={<button className={styles.button}>후기 작성하기</button>}
			/>
			<Modal.ModalContent>
				<form className={styles.container}>
					<h2>어쩌구 영양제 리뷰 작성하기</h2>
					<div className={styles["content-container"]}>
						<label>별점</label>
					</div>
					<div className={styles["content-container"]}>
						<label>태그</label>
					</div>
					<div className={styles["content-container"]}>
						<label>사진 등록</label>
					</div>
					<div className={styles["content-container"]}>
						<label>후기 작성</label>
						<textarea />
					</div>
				</form>
			</Modal.ModalContent>
		</Modal>
	);
}
