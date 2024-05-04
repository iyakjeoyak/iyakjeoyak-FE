import CommonHeaderBox from "../CommonHeaderBox";
import style from "../../style/likeditem.module.scss";
import { likeRecordMockData as likedData } from "../../mockData";
import CommonCardBox from "../CommonCardBox";
import { useNavigate } from "react-router-dom";

const likedItem = likedData.likedSupplement;

const LikedItem = () => {
	const navigate = useNavigate();
	return (
		<section>
			<CommonHeaderBox
				titleText="관심 영양제"
				count={likedItem.length}
				className={style.header}
			/>

			<div className={`${style.cardGrid}}`}>
				{likedItem.map((cardInfo, likedItemId) => (
					<CommonCardBox
						key={likedItemId}
						name={cardInfo.itemName}
						likedEffect={cardInfo.likedEffect}
						liked={cardInfo.liked}
						img={cardInfo.img}
						onClick={() => navigate(`/detail/${likedItemId}`)}
					/>
				))}
			</div>
		</section>
	);
};

export default LikedItem;
