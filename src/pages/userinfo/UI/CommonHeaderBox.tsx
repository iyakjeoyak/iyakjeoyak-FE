import style from "../style/commonheaderbox.module.scss";

interface UserCommonHeaderProps {
	titleText: string;
	count: number;
	Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	onClick?: (evet: React.MouseEvent<SVGSVGElement>) => void;
	className: string;
}

const CommonHeaderBox: React.FC<UserCommonHeaderProps> = ({
	onClick,
	titleText,
	count,
	Icon,
	className,
}) => {
	return (
		<section className={`${style.container} ${className}  `}>
			{Icon && <Icon className={style.icon} onClick={onClick} />}
			<div className={style.title}>
				{" "}
				{titleText} {count}개{" "}
			</div>
		</section>
	);
};

export default CommonHeaderBox;
