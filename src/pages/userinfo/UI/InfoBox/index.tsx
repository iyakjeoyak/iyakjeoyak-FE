import style from "../../index.module.scss";
import InfoBoxHeader from "./InfoBoxHeader";
import InfoBoxItem from "./InfoBoxItem";

interface InfoBoxProps {
	children: React.ReactNode;
}

const InfoBox = ({ children }: InfoBoxProps) => (
	<div className={style.sectionBoxArea}>{children}</div>
);

InfoBox.Header = InfoBoxHeader;
InfoBox.Item = InfoBoxItem;

export default InfoBox;
