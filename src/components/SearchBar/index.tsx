// import { IoSearch } from "react-icons/io5";
// import styles from "./index.module.scss";

import { Options, SelectMain, SelectedKeywordBox } from "./UI";

import SearchField from "./UI/SearchField";

const SearchBar = Object.assign(SelectMain, {
	Options: Options,
	SearchField: SearchField,
	Keyword: SelectedKeywordBox,
});

export default SearchBar;
