import getReviewById from "./getReviewById";
import getReviewsByMedicineId from "./getReviewsByMedicineId";
import { queryOptions } from "@tanstack/react-query";

const reviewQueryOptions = {
    getReviewsByMedicineId: ({page, size, medicineId}:{medicineId: number, page: number, size:number}) => 
     queryOptions({
      queryKey:['review', 'reviews', medicineId],
      queryFn: () => getReviewsByMedicineId({page, size, medicineId}),
      initialData:{
        data: [],
        number: 0,
        size: 0,
        totalPages: 0,
        totalElement: 0,
        numberOfElement: 0
      }
   }),
   getReviewById: ({reviewId}:{reviewId: number}) => 
    queryOptions({
     queryKey:['review', 'reviews', reviewId],
     queryFn: ()=>getReviewById({reviewId}), 
  })
}
   

export default reviewQueryOptions;