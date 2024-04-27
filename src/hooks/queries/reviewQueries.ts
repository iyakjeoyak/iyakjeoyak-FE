
import { getReviewById, getReviewsByMedicineId } from "@/api/review";
import { queryOptions } from "@tanstack/react-query";

const reviewQueries = {
    getReviewsByMedicineId: ({medicineId}:{medicineId: number}) => 
     queryOptions({
      queryKey:['review', 'reviews', medicineId],
      queryFn: () => getReviewsByMedicineId({medicineId})
   }),
   getReviewById: ({reviewId}:{reviewId: number}) => 
    queryOptions({
     queryKey:['review', 'reviews', reviewId],
     queryFn: ()=>getReviewById({reviewId}), 
  })
}
   

export default reviewQueries;