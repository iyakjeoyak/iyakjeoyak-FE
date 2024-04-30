import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import { FaShare } from "react-icons/fa";
import IconTag from "@/components/IconTag";
import StarRating from "@/components/StarRating";
import Tag from "@/components/Tag";
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
  hashtags: Array<{id: number, name: string}>
}

export default function MedicineCard({hashtags, name, brand, heartCount, grade, reviewCount}:MedicineCardProps) {
  const medicineId = useGetIdByLocation();

  const { mutate } = useMutation({
    mutationFn:postMedicineLike, 
    onSuccess: ()=>queryClient.invalidateQueries(medicineQueryOptions.getMedicineById({medicineId}))});

	const handleLikeClick = () => {
		mutate({id: medicineId})
	};

	const handleShareClick = () => {
    const location = window.location.href;
    navigator.clipboard.writeText(location).then(() => {
      toast.success("URL이 클립보드에 복사되었습니다.",{ autoClose: 2000 });
    }).catch(() => {
      toast.error("URL 복사에 실패했습니다.", { autoClose: 2000 });
    });
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
					<StarRating filledStars={grade} />
					<span>({reviewCount}개)</span>
				</div>
				<div className={styles.tags}>
					<Tag text="피로개선" backgroundColor="green" />
				{hashtags.slice(0, 2).map((tag)=>	<Tag key={tag.id} text={tag.name} backgroundColor="green" />)}
				</div>
			</div>
			<div className={styles.buttons}>
				<IconTag
					icon={heartCount === 0 ? <IoMdHeartEmpty /> : <IoMdHeart />}
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
