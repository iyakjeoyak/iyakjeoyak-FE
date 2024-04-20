import { SearchBarRoot, SelectedKeywordTagsList } from "./UI";

import KeywordInput from "./UI/KeywordInput";
import SearchResultList from "./UI/SearchResultList";

const SearchBar = Object.assign(SearchBarRoot, {
	KeywordInput,
	SearchResultList,
	SelectedKeywordTagsList,
});

export default SearchBar;

/*
KeywordInput에서 현재 입력중인 키워드를 관리 => 디바운스로 api 요청 => 검색어 클릭시(/search이동, 외부에 selectedKeyword변동 => /search?=이동으로 변경, 외부에 selectedKeyword 제공)
SearchResultList => 현재 입력중인 키워드를 디바운스로 api 요청받은 결과를 반환(디바운스 아닐듯, 변경될때마다 보내야함-> css 고민정도?), 클릭시 /search이동 => INP
SelectedKeywordTagList => 현재 검색중인 키워드를 보여주고 닫음(useLocation으로 받아오기, 닫으면 /search이동)

TODO: 키보드로 SearchResultList에서 키보드로 선택하기


관리해야하는 값
- 현재 검색중인 키워드 -> 지역관리 불필요할듯, Input에서만 돌고 input에서 api 요청하고 결과들만 SearchResultList에 넘겨줄듯 => 근데 그 업데이트 함수는 ROOT에서 생성해야하니까,,관리..?
- 검색 완료한 키워드 -> KeywordInput에서 업데이트해주고 SelectedKeywordTagsList에서 가져다가 써야할듯 => 서치로 하는게 낫다 -> ㅇㅈ -> 키워드 존재하는 경우 있고 없는경우도 있으니까 굳이 상태를 만들어줄 필요 없을듯
엥 네개밖에 없넹
- 검색완료한 결과 => 이것도 아무튼 ROOT에서 생성해줘야함..?

ROOT는 관리자인가

외부에서 주입된걸 SearchBar 안에서 context로 관리하려면 ROOT에서 넣어줘야하나
컴파운드 컴포넌트 덩어리는 뭐라고 부르나
합성당하는 컴포넌트만 사용하는 경우 그냥 props 전달이 맞을듯
이거 그냥 zustand로 관리하면 안되나

이름 변경 => 약간 블로그 의존적이었지 않았나 싶다
value들을 상수로 관리 => 약간 혼자 이 효용을 받아들이지못한거같다 왜 난리
*/
