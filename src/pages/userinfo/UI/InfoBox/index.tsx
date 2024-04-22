import style from "../../index.module.scss";
import InfoBoxContent from "./InfoBoxContent";
import InfoBoxHeader from "./InfoBoxHeader";

interface InfoBoxProps {
	children: React.ReactNode;
}

const InfoBox = ({ children }: InfoBoxProps) => (
	<div className={style.sectionBoxArea}>{children}</div>
);

InfoBox.Header = InfoBoxHeader;
InfoBox.Content = InfoBoxContent;

export default InfoBox;
