export const slicedArray = (arr, value) => {
   if (!Array.isArray(arr)) {
      return [];
    }
   return arr.slice(0,value)
}