import "@styles/global.scss";
import CommonHeaderBox from "./CommonHeaderBox";
import { supplementRecordMockData } from "../mockData";
import ListIcon from "../assets/ListIcon";
// import style from "../style/supplementhistory.scss";
// import { SupplementDetail, SupplementRecordData } from "../MyPageType";

const SuplementHistory: React.FC = () => {
	const count = supplementRecordMockData.mySupplements.length;
	return (
		<>
			<CommonHeaderBox
				titleText="복용 중인 영양제"
				count={count}
				Icon={ListIcon}
			/>
		</>
	);
};

export default SuplementHistory;
