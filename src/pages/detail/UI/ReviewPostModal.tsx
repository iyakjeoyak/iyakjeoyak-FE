import medicineReviewPostValidation, {
	initialMedicineReviewPostBody,
} from "../utils/medicineReviewPostValidation";
import { useMutation, useQuery } from "@tanstack/react-query";

import { Form } from "@/components/Form";
import Modal from "@/components/Modal";
import ectQueryOptions from "@/api/etc";
import medicineQueryOptions from "@/api/medicine";
import postReview from "@/api/review/postReview";
import { queryClient } from "@/main";
import styles from "../styles/ReviewPostModal.module.scss";
import useGetIdByLocation from "../hooks/useGetIdByLocation";

export interface PostReviewBody {
	title: string;
	medicineId: number;
	tagList: number[];
	content: string;
	star: number;
}

export default function ReviewPostModal() {
	const { data: tags } = useQuery(ectQueryOptions.getCategories());

	const medicineId = useGetIdByLocation();

	const { mutate } = useMutation({
		mutationFn: postReview,
		onSuccess: () =>
			queryClient.invalidateQueries(
				medicineQueryOptions.getMedicineById({ medicineId: 1 }),
			),
	});

	const onSubmit = (data: PostReviewBody) => {
		const formData = new FormData();

		formData.append("reviewPayload", JSON.stringify({ ...data, medicineId }));
		formData.append("imgFile", "");

		for (let pair of formData.entries()) {
			console.log(pair[0] + ", " + pair[1]);
		}

		mutate({ body: formData });
		console.log(formData);
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
					<Form.Input<PostReviewBody>
						name="title"
						title="리뷰 제목"
						placeholder="리뷰 제목을 입력해주세요"
					/>
					<Form.StarRating />
					<Form.TagBoard title="태그 선택" tags={tags ?? []} name="tagList" />
					<Form.ImgsInput />
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
