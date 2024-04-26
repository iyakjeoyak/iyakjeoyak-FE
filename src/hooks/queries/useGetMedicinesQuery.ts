import { MedicineItemType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import queryKeys from './queryKeys';
import instance from '@/api';

const getMedicines = async () => {
  const response = await instance.get<MedicineItemType[]>('/api/medicines');
  return response.data;
};

const useGetMedicines = () => {
  return useQuery<MedicineItemType[], AxiosError>({
    queryKey: queryKeys.Medicines(),
    queryFn: getMedicines,
  });
};

export default useGetMedicines;