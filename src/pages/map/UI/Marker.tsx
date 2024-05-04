interface MarkerProps {
	onClick: () => void;
}

const Marker = ({ onClick }: MarkerProps) => {
	return (
		<>
			<img
				src="images/map_marker_icon.png"
				alt="지도 마커"
				style={{ cursor: "pointer" }}
				onClick={onClick}
			/>
		</>
	);
};

export default Marker;
