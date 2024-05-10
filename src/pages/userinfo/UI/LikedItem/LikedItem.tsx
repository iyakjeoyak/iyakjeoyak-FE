import CommonHeaderBox from "../CommonHeaderBox";
import style from "../../style/likeditem.module.scss";
import CommonCardBox from "../CommonCardBox";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getLikedSupplement from "@/api/useInfo/getLikedSupplement";
import { showToast } from "@/utils/ToastConfig";
import { LikedSupplmentArgs } from "@/api/useInfo/getLikedSupplement";

const LikedItem = () => {
	const navigate = useNavigate();
	const [likedItem, setLikedItem] = useState<LikedSupplmentArgs | null>(null);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const likedData = await getLikedSupplement({ page: 0, size: 20 });
				setLikedItem(likedData);
			} catch (error) {
				showToast({
					type: "error",
					message: "좋아요 영양제 데이터를 가져오는 중 오류가 발생했습니다.",
				});
			}
		};
		fetchItems();
	}, []);

	return (
		<section className={style.likedSection}>
			<CommonHeaderBox
				titleText="관심 영양제"
				count={likedItem ? likedItem.numberOfElement : 0}
				className={style.header}
			/>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					marginTop: "20rem",
					gap: "10rem",
				}}
			>
				{likedItem &&
					likedItem.data.map((likedCard) => (
						<CommonCardBox
							key={likedCard.id}
							likedItemName={likedCard.medicineId.prdlst_NM}
							// likedEffect={cardInfo.likedEffect}
							liked={true}
							img={likedCard.medicineId.image?.fullPath}
							onClick={() => navigate(`/detail/${likedCard.medicineId.id}`)}
						/>
					))}
			</div>
		</section>
	);
};

export default LikedItem;
