import * as _ from "lodash";

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useMutation, useQuery } from "@tanstack/react-query";

import TagCommon from "@/components/Tag";
import WriterTitle from "@/components/WriterTitle";
import isZero from "@/utils/isZero";
import postReviewLike from "@/api/review/postReviewLike";
import { queryClient } from "@/main";
import reviewQueryOptions from "@/api/review";
import styles from "../styles/ReviewDetailModal.module.scss";

export default function ReviewDetailModal({ reviewId }: { reviewId: number }) {
	const {
		data: {
			content,
			title,
			createdBy,
			imageResult,
			createdDate,
			hashtagResult,
			heartCount,
			star,
		},
	} = useQuery(reviewQueryOptions.getReviewById({ reviewId }));

	const { mutate: likeMutate } = useMutation({
		mutationFn: postReviewLike,
		onSuccess: () => {
			queryClient.invalidateQueries(
				reviewQueryOptions.getReviewById({ reviewId }),
			);
		},
	});

	const handleLikeClick = () => {
		likeMutate(reviewId);
	};

	return (
		<article className={styles.container}>
			<button className={styles.heart} onClick={handleLikeClick}>
				{isZero(heartCount) ? <IoMdHeartEmpty /> : <IoMdHeart />}
				{heartCount}
			</button>
			<h2>{title}</h2>
			<WriterTitle
				userId={createdBy.userId}
				image={createdBy.image}
				nickname={createdBy.nickname}
				createdDate={createdDate}
				star={star}
			/>
			{hashtagResult.length !== 0 && (
				<div className={styles.tags}>
					{hashtagResult?.map((tag) => (
						<TagCommon key={tag.id} text={tag.name} />
					))}
				</div>
			)}
			<div>{content}</div>
			{imageResult?.map((img) => <img src={img.fullPath} alt="리뷰 이미지" />)}
		</article>
	);
}
