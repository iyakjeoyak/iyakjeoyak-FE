import { SupplementType } from "../userInfoType";
import InfoBox from "./InfoBox";

interface SupplementProps {
	supplement: SupplementType[];
}

const Supplement = ({ supplement }: SupplementProps) => {
	return (
		<InfoBox>
			<InfoBox.Header
				title="내 영양제"
				navigateTo="/userinfo/user-supplement"
				navigateButton={true}
			/>
			<InfoBox.Item items={supplement} />
		</InfoBox>
	);
};

export default Supplement;
