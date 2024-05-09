import style from "../../index.module.scss";
import PointIcon from "@/assets/icons/PointIcon";
import { useUserContext } from "../../utils/userContext";

interface UserPointInfoProps {
	onNavigate: () => void;
}

const PointContent = ({ onNavigate }: UserPointInfoProps) => {
	const { userData } = useUserContext();
	const points = userData?.point;

	return (
		<section className={style.myPageContent}>
			<section className={style.pointSection}>
				<div className={style.pointFixArea}>
					<PointIcon className={style.pointSVG} />
					<div className={style.pointTitle}>내 포인트</div>
				</div>

				<div className={style.pointArea}>
					<div className={style.userPoint}>{points ? points : 0}</div>
					<div className={style.pointDetail} onClick={onNavigate}>
						내역 보기
					</div>
				</div>
			</section>
		</section>
	);
};

export default PointContent;
