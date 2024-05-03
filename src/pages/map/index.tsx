import { Map } from "./UI";
import { likedPharmacies } from "./utils/pharmacyMock";

const PharmacyMap = () => {
	return <Map pharmacies={likedPharmacies} />;
};

export default PharmacyMap;
