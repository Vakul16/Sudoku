let list = [1,2,3,4,5];



function result(array)
{
    for(let i=0;i<=array.length-1;i++)
    {
        array[i]=array[i] + 10;
   }
   return array
}
console.log(result(list));