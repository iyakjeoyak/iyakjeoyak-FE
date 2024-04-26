import { MedicineDetailItemType, RequestPagenation } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import queryKeys from './queryKeys';
import instance from '@/api';

interface MedicineSearchResultProps extends RequestPagenation {
    medicineId: number
}

const getMedicineSearchResult = async ({medicineId, page, size}:MedicineSearchResultProps) => {
  const response = await instance.get<MedicineDetailItemType[]>(`/api/medicines/${medicineId}?page=${page}&size=${size}`);
  return response.data;
};

const useGetMedicineSearchResult = ({medicineId, page, size}:MedicineSearchResultProps) => {
  return useQuery<MedicineDetailItemType[], AxiosError>({
    queryKey: queryKeys.Medicines(),
    queryFn: ()=> getMedicineSearchResult({medicineId, page, size}),
  });
};

export default useGetMedicineSearchResult;