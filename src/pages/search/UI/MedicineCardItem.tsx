import { useNavigate } from "react-router-dom";

export default function MedicineCardItem() {
	const navigator = useNavigate();
	return (
		<div
			onClick={() => {
				navigator("/detail/1");
			}}
		>
			<div>이미지</div>
			<div>
				<div>
					<div>어쩌구영양제</div>
					<div>4.0(311개)</div>
				</div>
				<div>
					<div>태그</div>
					<div>태그</div>
					<div>태그</div>
				</div>
			</div>
		</div>
	);
}
