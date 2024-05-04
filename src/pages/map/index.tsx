import { Map } from "./UI";
import { PharmacyProvider } from "./utils/PharmacyContext";
// import { likedPharmacies } from "./utils/pharmacyMock";

const PharmacyMap = () => {
	return (
		<PharmacyProvider>
			<Map />
		</PharmacyProvider>
	);
};

export default PharmacyMap;
