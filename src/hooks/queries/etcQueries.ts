
import { getCategories, getHashtags } from "@/api/etc";
import { queryOptions } from "@tanstack/react-query";

const etcQueries = {
    getHashtags: () => 
     queryOptions({
      queryKey:['etc', 'categories'],
      queryFn: getHashtags,
   }),
   getCategories: () => 
    queryOptions({
     queryKey:['etc', 'categories'],
     queryFn: getCategories,
  }),
}
   
export default etcQueries;