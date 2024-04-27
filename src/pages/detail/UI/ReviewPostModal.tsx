import medicineReviewPostValidation, {
	MedicineReviewPostBodyType,
	initialMedicineReviewPostBody,
} from "../utils/medicineReviewPostValidation";

import { Form } from "@/components/Form";
import Modal from "@/components/Modal";
import styles from "../styles/ReviewPostModal.module.scss";
import { tagData } from "@/components/Form/TagButton/TagData";
// import etcQueries from "@/hooks/queries/etcQueries";
// import { useQuery } from "@tanstack/react-query";

export default function ReviewPostModal() {

	// const {data: tags} = useQuery(etcQueries.getCategories())

	const onSubmit = (data: MedicineReviewPostBodyType) => {
		console.log(data);
	};

	return (
		<Modal>
			<Modal.Trigger
				openElement={<button className={styles.button}>후기 작성하기</button>}
			/>
			<Modal.Content>
				<Form
					validationSchema={medicineReviewPostValidation}
					pageDefaultValues={initialMedicineReviewPostBody}
					onSubmit={onSubmit}
				>
					<Form.Input<MedicineReviewPostBodyType>
						name="title"
						title="리뷰 제목"
						placeholder="리뷰 제목을 입력해주세요"
					/>
					<Form.TagBoard title="태그 선택" tags={tagData} />
					<Form.Textarea
						name="content"
						title="후기 작성"
						placeholder="리뷰를 입력해주세요(최소 50자 이상)"
					/>
					<Form.Button text="후기 작성완료" variant="dark" />
				</Form>
			</Modal.Content>
		</Modal>
	);
}
