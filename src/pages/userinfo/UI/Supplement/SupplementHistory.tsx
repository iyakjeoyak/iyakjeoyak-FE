import "@styles/global.scss";

import { useEffect, useState } from "react";

import CommonCardBox from "../CommonCardBox";
import CommonHeaderBox from "../CommonHeaderBox";
import GridIcon from "@/pages/userinfo/assets/GridIcon";
import ListIcon from "../../assets/ListIcon";
import Modal from "@/components/Modal";
import { ShortSupplementInfo } from "../../userInfoType";
import SupplementAddForm from "./SupplementAddForm";
import SupplementModal from "./SupplementModal";
import getUserSupplement from "@/api/useInfo/getUserSupplement";
import style from "../../style/supplementhistory.module.scss";
import { useInfiniteQuery } from "@tanstack/react-query";
import useIntersect from "@/hooks/useIntersect";
import useToggle from "@/hooks/useToggle";

const noSupplementData = {
	medicineId: 0,
	medicineName: "",
	expirationDate: "",
	memo: "",
	image: "",
};

const SupplementHistory = () => {
	const {
		isOpen: isOpenSupplement,
		onClose: onCloseSupplement,
		onOpen: onOpenSupplement,
		toggleOpen: toggleOpenSupplement,
	} = useToggle();
	const {
		isOpen: isOpenEditSupplement,
		onClose: onCloseEditSupplement,
		onOpen: onOpenEditSupplement,
		toggleOpen: toggleOpenEditSupplement,
	} = useToggle();

	const [cardForm, setCardForm] = useState<"slim" | "wide">("slim");
	const [selectedSupplement, setSelectedSupplement] =
		useState<ShortSupplementInfo | null>(null);

	const { data, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteQuery(
		{
			queryKey: ["userInfo", "storage"],
			// page : number로 넘어가면
			queryFn: ({ pageParam = { page: 0 } }) => {
				return getUserSupplement(pageParam);
			},
			getNextPageParam: (lastPage) => {
				if (lastPage.number + 1 < lastPage.totalPages) {
					return { page: lastPage.number + 1 };
				}
				return undefined;
			},

			initialPageParam: { page: 0 },
			// 여기도 number로 받아야함
			// 으으으ㅡ... 그래도 했다..
			select: ({ pages }) => {
				const returnData = pages?.map((page) => page.data).flat();
				const totalElement = pages[0].totalElement;
				const totalPages = pages[0].totalPages;
				return { supplementData: returnData, totalElement, totalPages };
			},
		},
	);

	const { ref } = useIntersect({
		root: null,
		rootMargin: "0px",
		threshold: 0.1,
		onIntersect: ([entry]) => {
			if (entry.isIntersecting && !isFetchingNextPage) {
				fetchNextPage();
			}
		},
	});

	const isLastPage = data?.totalElement === data?.supplementData.length;

	const count = data?.totalElement;
	const supplementInfo = data?.supplementData;

	const onChangeCardStyle = () => {
		setCardForm((prevForm) => (prevForm === "slim" ? "wide" : "slim"));
	};

	const handleCardClick = (supplement: ShortSupplementInfo) => {
		setSelectedSupplement(supplement);
	};

	useEffect(() => {
		refetch(); // addForm에서 날린 invalidatequeries쿼리로 ui 업데이트가 안됨 resetqueries로는 됨 ?
	}, [data]);

	return (
		<section className={style.userSupplementContainer}>
			<CommonHeaderBox
				titleText="복용 중인 영양제"
				count={count ? count : 0}
				Icon={cardForm === "slim" ? ListIcon : GridIcon}
				onClick={onChangeCardStyle}
				className={style.header}
			/>

			<Modal
				isOpen={isOpenSupplement}
				onClose={onCloseSupplement}
				toggleOpen={toggleOpenSupplement}
				onOpen={onOpenSupplement}
			>
				<Modal.Trigger
					openElement={
						<div className={`${style.cardGrid} ${style[cardForm]}`}>
							{supplementInfo &&
								supplementInfo?.map((cardInfo) => (
									<CommonCardBox
										key={cardInfo.id}
										form={cardForm}
										medicineNames={cardInfo.medicineName}
										img={cardInfo.image?.fullPath}
										onClick={() => handleCardClick(cardInfo)}
										{...cardInfo}
									/>
								))}
						</div>
					}
				/>

				<Modal.Content>
					{selectedSupplement?.medicineName && (
						<SupplementModal
							itemId={selectedSupplement.id}
							onClose={onCloseSupplement}
						/>
					)}
				</Modal.Content>
			</Modal>

			<Modal
				isOpen={isOpenEditSupplement}
				onClose={onCloseEditSupplement}
				toggleOpen={toggleOpenEditSupplement}
				onOpen={onOpenEditSupplement}
			>
				<Modal.Trigger openElement={<CommonCardBox form={cardForm} />} />
				<Modal.Content>
					<SupplementAddForm
						formInitialValues={noSupplementData}
						onClose={onCloseEditSupplement}
					/>
				</Modal.Content>
			</Modal>

			<div ref={ref} style={{ height: 20 }}>
				{" "}
				{!isLastPage && isFetchingNextPage && (
					<p>영양제 정보를 불러오는 중입니다</p>
				)}
			</div>
		</section>
	);
};

export default SupplementHistory;
