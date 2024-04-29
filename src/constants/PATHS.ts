import { TAPS_QUERIES } from "./TAPS";

const PATHS = {
  home : '/home',
  login : '/login',
  signup: '/signup',
  search: '/search',
  myPage: '/my-page',
  detail: (id:string, tap:TAPS_QUERIES) => `/detail/${id}?tap=${tap}`
}

export default PATHS;