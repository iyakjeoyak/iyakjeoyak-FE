import { Form } from "@/components/Form";
import SearchBar from "@/components/SearchBar";
import * as yup from "yup";
import { SupplementFormValues } from "./SupplementModal";
import { useState } from "react";
import getAutoCompleteResult from "@/api/common/getAutoCompleteResult";
import { KeywordResultItemType } from "@/pages/main";
import { useMutation } from "@tanstack/react-query";
import postUserSupplement from "@/api/useInfo/postUserSupplement";
import { showToast } from "@/utils/ToastConfig";
import getSearchedSupplement, {
	SupplementProduct,
} from "@/api/useInfo/getSearchedSupplement";
import { queryClient } from "@/main";

const supplementValidationSchema = yup.object().shape({
	medicineName: yup.string().required("영양제 이름을 작성해주세요."),
	expirationDate: yup
		.string()
		.required("유통기한을 작성해주세요.")
		.matches(
			/^\d{4}-\d{2}-\d{2}$/,
			"유통기한은 YYYY-MM-DD 형식으로 작성해주세요.",
		),
	memo: yup.string().optional(),
	image: yup.mixed<File>().nullable(),
});

interface SupplementEditFormProps {
	formInitialValues: SupplementFormValues;
	onClose: () => void;
}

const SupplementAddForm = ({
	formInitialValues,
	onClose,
}: SupplementEditFormProps) => {
	const [keywordSearchResult, setKeywordSearchResult] = useState<
		KeywordResultItemType[]
	>([]);
	const [medicineName, setMedicineName] = useState(
		formInitialValues.medicineName,
	);
	const [searchData, setSearchData] = useState<SupplementProduct | null>(null);

	const { mutate } = useMutation({
		mutationFn: postUserSupplement,
		onSuccess: () => {
			queryClient.resetQueries({ queryKey: ["userInfo", "storage"] });
			showToast({
				type: "success",
				message: "영양제가 성공적으로 추가되었습니다.",
			});
			onClose();
		},
		onError: () => {
			showToast({
				type: "error",
				message: "영양제 정보가 정상적으로 추가되지 않았습니다.",
			});
		},
	});

	const handleKeywordCompletedClick = async (keyword: string) => {
		try {
			const supplementDetails = await getSearchedSupplement(keyword);

			if (supplementDetails) {
				supplementDetails.map((supplementDetail) => {
					setMedicineName(supplementDetail.prdlst_NM);
					setSearchData(supplementDetail);

					if (searchData) {
						setKeywordSearchResult([]);
					}
				});
			} else {
				showToast({
					type: "error",
					message: "검색 결과가 없습니다.",
				});
			}
		} catch (error) {
			showToast({ type: "error", message: "검색 결과를 가져오지 못했습니다." });
		}
	};

	const handleGetAutoCompleteResults = async (keyword: string) => {
		if (keyword.length <= 1) {
			setKeywordSearchResult([]);
			return;
		}
		const response = await getAutoCompleteResult({ keyword });
		setKeywordSearchResult(response);
	};

	const onSubmit = (storageItem: any) => {
		const { image, ...josnData } = storageItem;

		const formData = new FormData();

		if (medicineName) {
			formData.set("medicineName", medicineName);
		}

		if (searchData) {
			formData.set("medicine", searchData.bssh_NM);
		}

		const userStorageCreatePayload = {
			...josnData,
			medicineName: medicineName,
			medicine: searchData ? searchData.bssh_NM : null,
			medicineId: searchData?.id,
		};

		formData.append(
			"userStorageCreatePayload",
			new Blob([JSON.stringify(userStorageCreatePayload)], {
				type: "application/json",
			}),
		);

		formData.append("image", image || "");

		mutate(formData);
	};

	return (
		<Form
			onSubmit={onSubmit}
			pageDefaultValues={formInitialValues}
			validationSchema={supplementValidationSchema}
		>
			<div>영양제 추가</div>

			<Form.ImgInput name="image" initialImage={searchData?.image?.fullPath} />
			<SearchBar>
				<SearchBar.SupplementKeywordInput
					placeholder="검색어를 입력해주세요"
					onSelect={handleKeywordCompletedClick}
					onChange={handleGetAutoCompleteResults}
				/>
				<SearchBar.SupplementSearchResultList
					keywordSearchResult={keywordSearchResult}
					handleKeywordSelected={handleKeywordCompletedClick}
				/>
				<SearchBar.SelectedKeywordTagsList />
			</SearchBar>

			<Form.Input
				name="medicineName"
				title="영양제 이름"
				placeholder="영양제 이름을 입력하세요"
				defaultValue={formInitialValues.medicineName}
				value={medicineName}
				onChange={(e) => setMedicineName(e.target.value)}
			/>
			<Form.Input
				name="expirationDate"
				title="유통기한"
				placeholder="유통기한을 입력하세요"
				defaultValue={formInitialValues.expirationDate}
			/>
			<Form.Input
				name="memo"
				title="한줄 메모"
				placeholder="메모를 입력하세요"
				defaultValue={formInitialValues.memo}
			/>
			<Form.Button
				text={formInitialValues.medicineName ? "수정 완료" : "저장"}
				variant="dark"
			/>
		</Form>
	);
};

export default SupplementAddForm;
