import { Form } from "@/components/Form";
import SearchBar from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { SupplementInfo } from "../../userInfoType";
import * as yup from "yup";
import { SupplementFormValues } from "./SupplementModal";
import { useState } from "react";
// import getAutoCompleteResult from "@/api/common/getAutoCompleteResult";
// import { queryClient } from "@/main";

const supplementValidationSchema = yup.object().shape({
	name: yup.string().required("Name is required"),
	dosage: yup.string().optional(),
	dueDate: yup.string().required("Due date is required"),
	effect: yup.array().of(yup.string().required()).optional(),
	memo: yup.string().optional(),
	mySupplementId: yup.number().required(),
	img: yup.string().url().optional(),
});

interface SupplementEditFormProps {
	formInitialValues: SupplementFormValues;
	onSubmit: (data: SupplementInfo) => void;
}

const SupplementEditForm = ({
	formInitialValues,
	onSubmit,
}: SupplementEditFormProps) => {
	const navigate = useNavigate();
	// const [isTagsModalOpen, setIsTagsModalOpen] = useState(false);
	const [_, setKeywordSearchResult] = useState<string[]>([]);

	const handleKeywordCompletedClick = (keyword: string) => {
		navigate(`/search?keyword=${keyword}`);
		setKeywordSearchResult([]);
	};

	const handleGetAutoCompleteResults = async (keyword: string) => {
		if (keyword.length <= 2) {
			setKeywordSearchResult([]);
			return;
		}
		// const response = await getAutoCompleteResult({ keyword });
		// setKeywordSearchResult(response);
	};

	// const toggleIsTagsModalOpen = () => {
	// 	setIsTagsModalOpen((prev) => !prev);
	// 	if (isTagsModalOpen)
	// 		queryClient.resetQueries({ queryKey: ["medicine", "medicines"] });
	// };

	return (
		<Form
			onSubmit={onSubmit}
			pageDefaultValues={formInitialValues}
			validationSchema={supplementValidationSchema}
		>
			<div>
				{formInitialValues.mySupplementId ? "영양제 편집" : "영양제 추가"}
			</div>

			<Form.ImgInput name="supplementImage" />
			<SearchBar>
				<SearchBar.KeywordInput
					placeholder="검색어를 입력해주세요"
					onClick={handleKeywordCompletedClick}
					onChange={handleGetAutoCompleteResults}
				/>
				{/* <SearchBar.SearchResultList keywordSearchResult={keywordSearchResult} /> */}
				<SearchBar.SelectedKeywordTagsList />
			</SearchBar>

			<Form.Input
				name="title"
				title="영양제 이름"
				placeholder="영양제 이름을 입력하세요"
				defaultValue={formInitialValues.name}
			/>
			<Form.Input
				name="date"
				title="유통기한"
				placeholder="유통기한을 입력하세요"
				defaultValue={formInitialValues.dueDate}
			/>
			<Form.Input
				name="memo"
				title="한줄 메모"
				placeholder="메모를 입력하세요"
				defaultValue={formInitialValues.memo}
			/>
			<Form.Button
				text={formInitialValues.mySupplementId ? "수정 완료" : "저장"}
				variant="dark"
			/>
		</Form>
	);
};

export default SupplementEditForm;
