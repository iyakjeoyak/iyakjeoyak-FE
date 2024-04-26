import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import queryKeys from './queryKeys';
import instance from '@/api';

interface MedicineAutoCompleteKeywordProps {
    keyword: string
}

interface MedicineAutoCompleteKeywordType {
    name: string;
}

const getAutoCompleteKeywords = async ({keyword}:MedicineAutoCompleteKeywordProps) => {
  const response = await instance.get<MedicineAutoCompleteKeywordType[]>(`/api/medicines?keyword=${keyword}`);
  return response.data;
};

const useGetAutoCompleteKeywords = ({keyword}:MedicineAutoCompleteKeywordProps) => {
  return useQuery<MedicineAutoCompleteKeywordType[], AxiosError>({
    queryKey: queryKeys.Medicines(),
    queryFn: ()=> getAutoCompleteKeywords({keyword}),
  });
};

export default useGetAutoCompleteKeywords;