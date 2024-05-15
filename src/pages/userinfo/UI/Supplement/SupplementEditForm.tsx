import * as yup from "yup";

import getSearchedSupplement, {
	SupplementProduct,
} from "@/api/useInfo/getSearchedSupplement";
import { useEffect, useState } from "react";

import { Form } from "@/components/Form";
import { KeywordResultItemType } from "@/pages/main";
import SearchBar from "@/components/SearchBar";
import { SupplementFormValues } from "./SupplementModal";
import getAutoCompleteResult from "@/api/search/getAutoCompleteResult";
import patchUserSupplement from "@/api/useInfo/patchUserSupplement";
import { showToast } from "@/utils/ToastConfig";
import { useMutation } from "@tanstack/react-query";

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

const SupplementEditForm = ({
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
		mutationFn: (formdata: FormData): Promise<any> => {
			if (typeof formInitialValues.id === "number") {
				return patchUserSupplement(formInitialValues.id, formdata);
			}
			return Promise.reject("영양제 정보 id가 적절하지 않습니다.");
		},
	});

	useEffect(() => {}, [medicineName, searchData]);

	const handleKeywordCompletedClick = async (keyword: string) => {
		try {
			const supplementDetails = await getSearchedSupplement(keyword);

			if (supplementDetails) {
				supplementDetails.map((supplementDetail) => {
					setMedicineName(supplementDetail.prdlst_NM);

					setSearchData(supplementDetail);
					setKeywordSearchResult([]);
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

		const userStorageEditPayload = {
			...josnData,
			medicineName: medicineName,
			medicine: searchData ? searchData.bssh_NM : null,
			medicineId: searchData?.id,
		};

		formData.append(
			"userStorageEditPayload",
			new Blob([JSON.stringify(userStorageEditPayload)], {
				type: "application/json",
			}),
		);

		formData.append("imgFile", image || "");

		mutate(formData, {
			onSuccess: () => {
				showToast({ type: "success", message: "성공적으로 작성되었습니다." });
				onClose();
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
			<div>영양제 편집</div>

			<Form.ImgInput
				name="imgFile"
				initialImage={searchData?.image?.fullPath}
			/>
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

export default SupplementEditForm;
