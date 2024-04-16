import SelectSort from "../../common/selectsort";

export default function CategoryBar() {
	return (
		<div>
			<div>
				<div>전체</div>
				<div>기능별</div>
				<div>성분별</div>
			</div>
			<SelectSort />
		</div>
	);
}
