import style from "../style/commonheaderbox.module.scss";
import { MyPageCommonHeaderProps } from "../userInfoType";

const CommonHeaderBox: React.FC<MyPageCommonHeaderProps> = ({
	onClick,
	titleText,
	count,
	Icon,
	className,
}) => {
	return (
		<section className={`${style.container} ${className}`}>
			<Icon className={style.icon} onClick={onClick} />
			<div className={style.title}>
				{" "}
				{titleText} {count}개{" "}
			</div>
		</section>
	);
};

export default CommonHeaderBox;
