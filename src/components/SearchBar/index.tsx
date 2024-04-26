import { SearchBarRoot, SelectedKeywordTagsList } from "./UI";

import KeywordInput from "./UI/KeywordInput";
import SearchResultList from "./UI/SearchResultList";

const SearchBar = Object.assign(SearchBarRoot, {
	KeywordInput,
	SearchResultList,
	SelectedKeywordTagsList,
});

export default SearchBar;
