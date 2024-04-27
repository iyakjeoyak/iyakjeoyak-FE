
import { getMedicineById, getMedicines } from "@/api/medicine";
import { queryOptions } from "@tanstack/react-query";

const medicineQueries = {
    getMedicines: () => 
     queryOptions({
      queryKey:['medicine', 'medicines'],
      queryFn: getMedicines,
   }),
   getMedicineById: ({medicineId}:{medicineId: number}) => 
    queryOptions({
     queryKey:['medicine', 'medicines', medicineId],
     queryFn: ()=>getMedicineById({medicineId}), 
  })
}
   
export default medicineQueries;