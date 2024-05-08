import { Form } from "@/components/Form";
import SearchBar from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { SupplementSubmmitInfo } from "../../userInfoType";
import * as yup from "yup";
import { SupplementFormValues } from "./SupplementModal";
import { useState } from "react";
import getAutoCompleteResult from "@/api/common/getAutoCompleteResult";
import { queryClient } from "@/main";
import { KeywordResultItemType } from "@/pages/main";
import { useMutation } from "@tanstack/react-query";
import postUserSupplement from "@/api/useInfo/postUserSupplement";
import { showToast } from "@/utils/ToastConfig";

const supplementValidationSchema = yup.object().shape({
	medicineName: yup.string().required("Name is required"),
	expirationDate: yup.string().required("Due date is required"),
	memo: yup.string().optional(),
	image: yup.string().url().optional(),
});

interface SupplementEditFormProps {
	formInitialValues: SupplementFormValues;
	// onSubmit: (data: SupplementSubmmitInfo) => void;
}

const SupplementEditForm = ({ formInitialValues }: SupplementEditFormProps) => {
	const navigate = useNavigate();
	// const [isTagsModalOpen, setIsTagsModalOpen] = useState(false);
	const [keywordSearchResult, setKeywordSearchResult] = useState<
		KeywordResultItemType[]
	>([]);

	const { mutate } = useMutation({
		mutationFn: postUserSupplement,
	});

	const handleKeywordCompletedClick = (keyword: string) => {
		navigate(`/search?keyword=${keyword}`);
		setKeywordSearchResult([]);
	};

	const handleGetAutoCompleteResults = async (keyword: string) => {
		if (keyword.length <= 2) {
			setKeywordSearchResult([]);
			return;
		}
		const response = await getAutoCompleteResult({ keyword });
		setKeywordSearchResult(response);
	};

	// const toggleMySupplementModalOpen = () => {
	// 	setIsTagsModalOpen((prev) => !prev);
	// 	if (isTagsModalOpen)
	// 		queryClient.resetQueries({ queryKey: ["medicine", "medicines"] });
	// };

	const onSubmit = (storageItem: any) => {
		const { image, ...josnData } = storageItem;

		const formData = new FormData();
		const userStorageCreatePayload = {
			...josnData,
		};

		formData.append(
			"userStorageCreatePayload",
			new Blob([JSON.stringify(userStorageCreatePayload)], {
				type: "application/json",
			}),
		);

		formData.append("image", image || "");

		mutate(formData, {
			onSuccess: () => {
				showToast({ type: "success", message: "성공적으로 작성되었습니다." });
			},
			onError: () => {
				showToast({
					type: "error",
					message: "내 영양제 정보가 정상적으로 수정되지 않았습니다.",
				});
			},
		});
	};

	return (
		<Form
			onSubmit={onSubmit}
			pageDefaultValues={formInitialValues}
			validationSchema={supplementValidationSchema}
		>
			<div>{formInitialValues.medicineId ? "영양제 편집" : "영양제 추가"}</div>

			<Form.ImgInput name="supplementImage" />
			<SearchBar>
				<SearchBar.KeywordInput
					placeholder="검색어를 입력해주세요"
					onClick={handleKeywordCompletedClick}
					onChange={handleGetAutoCompleteResults}
				/>
				<SearchBar.SearchResultList keywordSearchResult={keywordSearchResult} />
				<SearchBar.SelectedKeywordTagsList />
			</SearchBar>

			<Form.Input
				name="medicineName"
				title="영양제 이름"
				placeholder="영양제 이름을 입력하세요"
				defaultValue={formInitialValues.medicineName}
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
				text={formInitialValues.medicineId ? "수정 완료" : "저장"}
				variant="dark"
			/>
		</Form>
	);
};

export default SupplementEditForm;
