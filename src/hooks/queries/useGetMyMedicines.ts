import { MedicineItemType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import queryKeys from './queryKeys';
import instance from '@/api';

const getMyMedicines = async () => {
  const response = await instance.get<MedicineItemType[]>('/api/my/medicines');
  return response.data;
};

const useGetMyMedicines = () => {
  return useQuery<MedicineItemType[], AxiosError>({
    queryKey: queryKeys.Medicines(),
    queryFn: getMyMedicines,
  });
};

export default useGetMyMedicines;