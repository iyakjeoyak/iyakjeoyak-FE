import postReview, { PostReviewBody } from "./postReview";

import getBestReview from "./getBestReview";
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
   getBestReview: ({size}:{ size:number}) => 
     queryOptions({
      queryKey:['review', 'reviews', 'best'],
      queryFn: () => getBestReview({ size }),
      initialData: []
   }),
   getReviewById: ({reviewId}:{reviewId: number}) => 
    queryOptions({
     queryKey:['review', 'reviews', reviewId],
     queryFn: ()=>getReviewById({reviewId}), 
     initialData: { 
      id: 0,
      title: '',
      content: '',
      createdBy: { userId: 0, nickname: '', image: null},
      createdDate: '',
      hashtagResult: [{id: 0, name: ''}],
      heartCount: 0,
      star: 0,
      modifiedDate: '',
    }
  }),
  postReview: ({body}:{body: PostReviewBody}) =>
    queryOptions({
      queryKey: ['review', 'postReview'],
      queryFn: () => postReview({body}),
    }),
}
   

export default reviewQueryOptions;