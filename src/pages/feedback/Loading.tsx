import loading from "@/assets/images/loading.webp";

const Loading = ({ isFullLoading = false }: { isFullLoading?: boolean }) => {
	if (isFullLoading) {
		return (
			<section
				style={{
					position: "fixed",
					right: 0,
					left: 0,
					top: 0,
					bottom: 0,
					display: "flex",
					justifyContent: "center",
					backgroundColor: "white",
					alignItems: "center",
				}}
			>
				<img src={loading} alt="로딩중" width={200} height={200} />
			</section>
		);
	}

	return (
		<div
			style={{
				position: "absolute",
				right: 0,
				left: "50%",
				transform: "translateX(50%)",
				top: 0,
				bottom: 0,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "white",
			}}
		>
			<img src={loading} alt="로딩중" width={200} height={200} />
		</div>
	);
};

export default Loading;
