import { useLocation } from "react-router-dom";

/** URL에서 약의 id를 반환하는 함수 */
export default function useGetIdByLocation(){
  const location = useLocation();
  
  const id = Number(location.pathname.split('/')[2]); 

  return id;
}