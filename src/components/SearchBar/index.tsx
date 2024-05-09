import {
	SearchBarRoot,
	SelectedKeywordTagsList,
	SupplementSearchResultList,
} from "./UI";

import KeywordInput from "./UI/KeywordInput";
import SearchResultList from "./UI/SearchResultList";
import SupplementKeywordInput from "./UI/SupplementKeywordInput";

const SearchBar = Object.assign(SearchBarRoot, {
	KeywordInput,
	SearchResultList,
	SelectedKeywordTagsList,
	SupplementSearchResultList,
	SupplementKeywordInput,
});

export default SearchBar;
