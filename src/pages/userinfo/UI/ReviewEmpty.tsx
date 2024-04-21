import "@styles/global.scss";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { Empty } from "@/pages/feedback/UI";

const ReviewEmpty = () => {
	const navigate = useNavigate();
	return (
		<Empty description="아직 작성된 후기가 없습니다">
			<Button
				type="button"
				variant="dark"
				size="m"
				onClick={() => {
					navigate(`/home`);
				}}
			>
				이번 주 BEST 영양제 확인하기{" "}
			</Button>
		</Empty>
	);
};

export default ReviewEmpty;
