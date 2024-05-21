import { useForm, useWatch } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";

import { ControlForm } from "@/components/ControlForm";
import Modal from "@/components/Modal";
import { getAccessToken } from "@/utils/getToken";
import medicineReviewPostValidation from "../../utils/medicineReviewPostValidation";
import postReview from "@/api/review/postReview";
import { queryClient } from "@/main";
import styles from "../../styles/ReviewPostModal.module.scss";
import tagQueryOptions from "@/api/tag";
import useGetIdByLocation from "../../hooks/useGetIdByLocation";
import { useState } from "react";
import useToggle from "@/hooks/useToggle";
import { yupResolver } from "@hookform/resolvers/yup";

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

	const medicineId = useGetIdByLocation();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		control,
	} = useForm({
		mode: "onSubmit",
		resolver: yupResolver(medicineReviewPostValidation),
	});

	const selectedTags = useWatch({ control, name: "tagList" });
	const star = useWatch({ control, name: "star" });

	const { data: tags } = useQuery(tagQueryOptions.getHashtags());
	const [imgFiles, setImageFiles] = useState<File[]>([]);
	const { isOpen, onClose, onOpen, toggleOpen } = useToggle();

	const { mutate: postReviewMutation } = useMutation({
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

	console.log(errors);
	const onSubmit = ({
		title,
		tagList,
		content,
		star,
	}: Omit<PostReviewBody, "medicineId">) => {
		const formData = new FormData();

		const formBody = {
			title,
			tagList,
			medicineId,
			content,
			star,
		};

		formData.append(
			"reviewPayload",
			new Blob([JSON.stringify(formBody)], { type: "application/json" }),
		);

		imgFiles.forEach((img) => {
			formData.append("imgFile", img);
		});

		postReviewMutation({ body: formData });
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			toggleOpen={toggleOpen}
			onOpen={onOpen}
		>
			<Modal.Trigger>
				<button className={styles.button}>후기 작성하기</button>
			</Modal.Trigger>
			<Modal.Content>
				<ControlForm onSubmit={handleSubmit(onSubmit)}>
					<ControlForm.Input
						title="리뷰 제목"
						placeholder="리뷰 제목을 입력해주세요"
						{...register("title")}
					/>
					<ControlForm.StarRating
						star={star}
						onClick={(rating: number) => setValue("star", rating)}
					/>
					<ControlForm.TagBoard
						title="태그 선택"
						tags={tags ?? []}
						selectedTags={selectedTags}
						onTagClick={(selectedTag) => setValue("tagList", selectedTag)}
						{...register("tagList")}
					/>
					<ControlForm.ImgsInput addImgFile={addImgFile} />
					<ControlForm.Textarea
						title="후기 작성"
						placeholder="리뷰를 입력해주세요(최소 50자 이상)"
						{...register("content")}
					/>
					<ControlForm.Button text="후기 작성완료" variant="dark" />
				</ControlForm>
			</Modal.Content>
		</Modal>
	);
}
