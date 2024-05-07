import medicineReviewPostValidation, {
	initialMedicineReviewPostBody,
} from "../utils/medicineReviewPostValidation";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { Form } from "@/components/Form";
import Modal from "@/components/Modal";
import ectQueryOptions from "@/api/common";
import { getAccessToken } from "@/utils/getToken";
import patchReviewById from "@/api/review/patchReviewById";
import postReview from "@/api/review/postReview";
import { queryClient } from "@/main";
import reviewQueryOptions from "@/api/review";
import styles from "../styles/ReviewPostModal.module.scss";
import useGetIdByLocation from "../hooks/useGetIdByLocation";
import useOpen from "@/hooks/useOpen";

export interface PostReviewBody {
	title: string;
	medicineId: number;
	tagList: number[];
	content: string;
	star: number;
}

export default function ReviewPostModal({
	isEditing = false,
	reviewId,
}: {
	isEditing?: boolean;
	reviewId?: number;
}) {
	const isLogin = getAccessToken();

	if (!isLogin) return;

	const initialData = reviewId
		? useQuery(reviewQueryOptions.getReviewById({ reviewId })).data
		: initialMedicineReviewPostBody;

	const { data: tags } = useQuery(ectQueryOptions.getHashtags());
	const [imgFiles, setImageFiles] = useState<File[]>([]);
	const { isOpen, onClose, onOpen, toggleOpen } = useOpen();

	const medicineId = useGetIdByLocation();

	const { mutate: postReviewMutation } = useMutation({
		mutationFn: postReview,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reviews"] });
			onClose();
		},
	});

	const { mutate: patchReviewMutation } = useMutation({
		mutationFn: (body: FormData) =>
			patchReviewById({ reviewId: reviewId as number, body }),
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

		postReviewMutation({ body: formData });
		patchReviewMutation(formData);
	};

	useEffect(() => {
		if (isEditing) {
			onOpen();
		}
	}, []);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			toggleOpen={toggleOpen}
			onOpen={onOpen}
		>
			{!isEditing && (
				<Modal.Trigger
					openElement={<button className={styles.button}>후기 작성하기</button>}
				/>
			)}
			<Modal.Content>
				<Form
					validationSchema={medicineReviewPostValidation}
					pageDefaultValues={initialData}
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
					<Form.Button
						text={isEditing ? "후기 수정완료" : "후기 작성완료"}
						variant="dark"
					/>
				</Form>
			</Modal.Content>
		</Modal>
	);
}
