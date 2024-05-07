import medicineReviewPostValidation, {
	initialMedicineReviewPostBody,
} from "../utils/medicineReviewPostValidation";
import { useMutation, useQuery } from "@tanstack/react-query";

import { Form } from "@/components/Form";
import Modal from "@/components/Modal";
import ectQueryOptions from "@/api/common";
import { getAccessToken } from "@/utils/getToken";
import postReview from "@/api/review/postReview";
import { queryClient } from "@/main";
import styles from "../styles/ReviewPostModal.module.scss";
import useGetIdByLocation from "../hooks/useGetIdByLocation";
import useOpen from "@/hooks/useOpen";
import { useState } from "react";

export interface PostReviewBody {
	title: string;
	medicineId: number;
	tagList: number[];
	content: string;
	star: number;
}

export default function ReviewPostModal() {
	const isLogin = getAccessToken();

	if (!isLogin) return;

	const { data: tags } = useQuery(ectQueryOptions.getHashtags());
	const [imgFiles, setImageFiles] = useState<File[]>([]);
	const { isOpen, onClose, onOpen, toggleOpen } = useOpen();

	const medicineId = useGetIdByLocation();

	const { mutate } = useMutation({
		mutationFn: postReview,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reviews"] });
			onClose();
		},
	});

	// TODO: react-hook-form으로 바꾸깅,,
	const addImgFile = (imgs: File[]) => {
		setImageFiles(imgs);
	};

	const onSubmit = (data: PostReviewBody) => {
		const formData = new FormData();

		const formBody = {
			title: data.title,
			tagList: data.tagList,
			medicineId,
			content: data.content,
			star: data.star,
		};

		formData.append(
			"reviewPayload",
			new Blob([JSON.stringify(formBody)], { type: "application/json" }),
		);

		imgFiles.forEach((img) => {
			formData.append("imgFile", img);
		});

		mutate({ body: formData });
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			toggleOpen={toggleOpen}
			onOpen={onOpen}
		>
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
					<Form.ImgsInput addImgFile={addImgFile} />
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
