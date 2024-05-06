import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import { FaShare } from "react-icons/fa";
import IconTag from "@/components/IconTag";
import StarRating from "@/components/StarRating";
import Tag from "@/components/Tag";
import copyToClipboard from "@/utils/copyToClipboard";
import getMedicineSave from "@/api/medicine/postMedicineSave";
import medicineQueryOptions from "@/api/medicine";
import postMedicineLike from "@/api/medicine/postMedicineLike";
import { queryClient } from "@/main";
import styles from "../styles/MedicineCard.module.scss";
import { toast } from "react-toastify";
import useGetIdByLocation from "../hooks/useGetIdByLocation";
import { useMutation } from "@tanstack/react-query";

interface MedicineCardProps {
	name: string;
	brand: string;
	heartCount: number;
	reviewCount: number;
	grade: number;
	hashtags: Array<{ id: number; name: string }>;
	isBookMark: boolean;
	isHeart: boolean;
}

export default function MedicineCard({
	hashtags,
	isHeart,
	name,
	brand,
	isBookMark,
	grade,
	reviewCount,
}: MedicineCardProps) {
	const medicineId = useGetIdByLocation();

	const { mutate: likeMutate } = useMutation({
		mutationFn: postMedicineLike,
		onSuccess: () => {
			queryClient.invalidateQueries(
				medicineQueryOptions.getMedicineById({ medicineId }),
			);
		},
	});

	const { mutate: saveMutate } = useMutation({
		mutationFn: getMedicineSave,
		onSuccess: () => {
			queryClient.invalidateQueries(
				medicineQueryOptions.getMedicineById({ medicineId }),
			);
		},
	});

	const handleLikeClick = () => {
		likeMutate(medicineId);
	};

	const handleSaveClick = () => {
		saveMutate(medicineId);
	};

	const handleShareClick = () => {
		const location = window.location.href;
		copyToClipboard(location);
	};

	return (
		<div className={styles.container}>
			<img src="/images/Medicine.png" />
			<div className={styles["content-container"]}>
				<div className={styles["info"]}>
					<div className={styles.brand}>{brand}</div>
					<div className={styles.name}>{name}</div>
				</div>
				<div className={styles["sub-info"]}>
					<StarRating filledStars={grade ?? 0} />
					<span>({reviewCount}개)</span>
				</div>
				<div className={styles.tags}>
					<Tag text="피로개선" backgroundColor="green" />
					{hashtags.map((tag) => (
						<Tag key={tag.id} text={tag.name} backgroundColor="green" />
					))}
				</div>
			</div>
			<div className={styles.buttons}>
				<IconTag
					icon={
						isBookMark ? (
							<FaBookmark fontSize={12} />
						) : (
							<FaRegBookmark fontSize={12} />
						)
					}
					text="보관하기"
					onClick={handleSaveClick}
				/>
				<IconTag
					icon={isHeart ? <IoMdHeart /> : <IoMdHeartEmpty />}
					text="관심 등록"
					onClick={handleLikeClick}
				/>
				<IconTag
					icon={<FaShare />}
					text="공유하기"
					onClick={handleShareClick}
				/>
			</div>
		</div>
	);
}
