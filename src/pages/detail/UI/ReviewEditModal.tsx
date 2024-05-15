import patchReviewById, {
	ReviewPatchBodyType,
} from "@/api/review/patchReviewById";
import { useMutation, useQuery } from "@tanstack/react-query";

import { Form } from "@/components/Form";
import deleteReviewImage from "@/api/review/deleteReviewImage";
import medicineReviewPatchValidation from "../utils/medicineReviewPatchValidation";
import postMoreReviewImage from "@/api/review/postMoreReviewImages";
import { queryClient } from "@/main";
import reviewQueryOptions from "@/api/review";
import tagQueryOptions from "@/api/tag";
import useGetIdByLocation from "../hooks/useGetIdByLocation";
import { useState } from "react";

export default function ReviewEditModal({
	onClose,
	reviewId,
}: {
	onClose: () => void;
	reviewId: number;
}) {
	const medicineId = useGetIdByLocation();

	const initialData = {
		...useQuery(reviewQueryOptions.getReviewById({ reviewId })).data,
		tagList: useQuery(
			reviewQueryOptions.getReviewById({ reviewId }),
		).data.hashtagResult.map((tag) => tag.id),
	};

	const { data: tags } = useQuery(tagQueryOptions.getHashtags());

	const [imgFiles, setImageFiles] = useState<File[]>([]);

	const { mutate: patchReviewMutation } = useMutation({
		mutationFn: (body: ReviewPatchBodyType) =>
			patchReviewById({ reviewId: reviewId as number, body }),
		onSuccess: () => {
			queryClient.invalidateQueries(
				reviewQueryOptions.getReviewById({ reviewId }),
			);
			onClose();
			queryClient.invalidateQueries({ queryKey: ["reviews"] });
		},
	});

	const { mutate: postMoreReviewImageMutation } = useMutation({
		mutationFn: (body: FormData) =>
			postMoreReviewImage({ reviewId: reviewId as number, body }),
		// onSuccess: () => {
		// 	queryClient.invalidateQueries(
		// 		reviewQueryOptions.getReviewById({ reviewId }),
		// 	);
		// 	onClose();
		// 	queryClient.invalidateQueries({ queryKey: ["reviews"] });
		// },
	});

	const { mutate: deleteReviewMutation } = useMutation({
		mutationFn: (imageId: number) =>
			deleteReviewImage({ reviewId: reviewId as number, imageId }),
		onSuccess: () => {
			onClose();
			queryClient.invalidateQueries({ queryKey: ["reviews"] });
		},
	});

	// TODO: react-hook-form으로 바꾸깅,,
	const addImgFile = (imgs: File[]) => {
		setImageFiles(imgs);
	};

	const onSubmit = ({ title, tagList, content, star }: ReviewPatchBodyType) => {
		const formBody = {
			title,
			tagList,
			medicineId,
			content,
			star,
		};

		const formData = new FormData();

		imgFiles.forEach((img) => {
			formData.append("imgFile", img);
		});

		patchReviewMutation(formBody);
		postMoreReviewImageMutation(formData);
	};

	const onDeleteImage = (id: number) => {
		deleteReviewMutation(id);
	};

	return (
		<Form
			validationSchema={medicineReviewPatchValidation}
			pageDefaultValues={initialData}
			onSubmit={onSubmit}
		>
			<Form.Input<ReviewPatchBodyType>
				name="title"
				title="리뷰 제목"
				placeholder="리뷰 제목을 입력해주세요"
			/>
			<Form.StarRating />
			<Form.TagBoard title="태그 선택" tags={tags ?? []} name="tagList" />
			<Form.ImgsInput
				onDelete={onDeleteImage}
				imageResult={initialData.imageResult}
				addImgFile={addImgFile}
			/>
			<Form.Textarea
				name="content"
				title="후기 작성"
				placeholder="리뷰를 입력해주세요(최소 50자 이상)"
			/>
			<Form.Button text="후기 수정완료" variant="dark" />
		</Form>
	);
}
