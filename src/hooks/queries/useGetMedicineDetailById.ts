import { MedicineDetailItemType, RequestPagenation } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import queryKeys from './queryKeys';
import instance from '@/api';

interface MedicineDetailByIdProps extends RequestPagenation {
    medicineId: number
}

const getMedicineDetailById = async ({medicineId, page, size}:MedicineDetailByIdProps) => {
  const response = await instance.get<MedicineDetailItemType[]>(`/api/medicines/${medicineId}?page=${page}&size=${size}`);
  return response.data;
};

const useGetMedicineDetailById = ({medicineId, page, size}:MedicineDetailByIdProps) => {
  return useQuery<MedicineDetailItemType[], AxiosError>({
    queryKey: queryKeys.Medicines(),
    queryFn: ()=> getMedicineDetailById({medicineId, page, size}),
  });
};

export default useGetMedicineDetailById;