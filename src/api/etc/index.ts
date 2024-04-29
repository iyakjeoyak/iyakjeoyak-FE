import { queryOptions } from "@tanstack/react-query";
import getHashtags from "./getHashtags";
import getCategories from "./getCategories";

const etcQueryOptions = {
    getHashtags: () => 
     queryOptions({
      queryKey:['etc', 'categories'],
      queryFn: getHashtags,
      initialData: [],
   }),
   getCategories: () => 
    queryOptions({
     queryKey:['etc', 'categories'],
     queryFn: ()=> getCategories(),
     initialData: [],
  }),
}
   
export default etcQueryOptions;