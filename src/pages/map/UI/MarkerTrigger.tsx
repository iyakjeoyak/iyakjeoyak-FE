// import Modal from "@/components/Modal";
// import { useEffect, useState } from "react";

// declare global {
// 	interface Window {
// 		handleOpen?: () => void;
// 	}
// }

// interface MarkerTriggerProps {
// 	map: naver.maps.Map;
// 	marker: naver.maps.Marker;
// 	detailData: {
// 		dutyName: string;
// 		dutyAddr: string;
// 		dutyTel1: string;
// 	} | null;
// }

// const MarkerTrigger = ({ map, marker, detailData }: MarkerTriggerProps) => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	// const OpenButton = () => (
// 	// 	<button onClick={() => setIsOpen(true)}>정보 보기</button>
// 	// );

// 	useEffect(() => {
// 		// CustomControl 생성
//         const button = document.createElement('button');
//         button.textContent = '정보 보기';
//         button.onclick = () => setIsOpen(true); // 버튼 클릭 이벤트 핸들링

//         // CustomControl 생성
//         const customControl = new naver.maps.CustomControl(button.outerHTML, {
//           position: naver.maps.Position.TOP_LEFT,
//         });

// 		// 컨트롤을 지도에 추가
// 		customControl.setMap(map);

// 		// 이벤트 핸들러를 전역으로 등록
// 		window.handleOpen = () => {
// 			setIsOpen(true);
// 		};

// 		return () => {
// 			// 컴포넌트 언마운트 시 정리
// 			customControl.setMap(null);
// 			delete window.handleOpen; // 전역 핸들러 제거
// 		};
// 	}, [map, marker]);

// 	return (
// 		<>
// 			{detailData && (
// 				<Modal>
// 					<Modal.Trigger openElement={button} />
// 					<Modal.Content>
// 						<div>
// 							<h1>{detailData.dutyName}</h1>
// 							<p>{detailData.dutyAddr}</p>
// 							<p>{detailData.dutyTel1}</p>
// 						</div>
// 					</Modal.Content>
// 				</Modal>
// 			)}
// 		</>
// 	);
// };

// export default MarkerTrigger;
