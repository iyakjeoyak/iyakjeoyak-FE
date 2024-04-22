import { useNavigate } from "react-router-dom";
import style from "../../index.module.scss";

interface InfoBoxHeaderProps {
	title: string;
	navigateTo: string;
	navigateButton: boolean;
}

const InfoBoxHeader = ({
	title,
	navigateTo,
	navigateButton,
}: InfoBoxHeaderProps) => {
	const navigate = useNavigate();
	return (
		<div className={style.sectionFixArea}>
			<div className={style.sectionBoxHeader}>
				<div className={style.sectionTitle}>{title}</div>
				{navigateButton && (
					<div
						className={style.sectionDetail}
						onClick={() => navigate(navigateTo)}
					>
						더보기
					</div>
				)}
			</div>
		</div>
	);
};

export default InfoBoxHeader;
