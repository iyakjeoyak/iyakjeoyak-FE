const getFullDate = (date:Date, joiner:string = '.') =>{
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [ year, month, day ].join(joiner);
 }
 
 export default getFullDate;