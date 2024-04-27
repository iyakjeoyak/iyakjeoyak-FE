import getMedicines from "@/api/medicine/getMedicines";
import { queryOptions } from "@tanstack/react-query";

const medicineQueries = {
    getMedicines: () => 
     queryOptions({
      queryKey:['medicine', 'medicines'],
      queryFn: getMedicines, 
      staleTime:Infinity
   })
}
   

export default medicineQueries;