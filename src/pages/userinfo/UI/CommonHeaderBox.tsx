import style from "../style/commonheaderbox.module.scss";
import { MyPageCommonHeaderProps } from "../userInfoType";

const CommonHeaderBox: React.FC<MyPageCommonHeaderProps> = ({
	titleText,
	count,
	Icon,
}) => {
	return (
		<section className={style.container}>
			<Icon className={style.icon} />
			<div className={style.title}>
				{" "}
				{titleText} {count}개{" "}
			</div>
		</section>
	);
};

export default CommonHeaderBox;
