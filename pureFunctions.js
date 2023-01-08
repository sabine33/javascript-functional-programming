// EvensOnly & Total

const double=x=>x*2;
const isEven=x=>x%2==0;
const doubled=arr=>arr.map(double)
const evensOnly=arr=>arr.filter(isEven)
const total=arr=>arr.reduce((a,c)=>a+=c,0);

console.log(total(evensOnly([1,2,3,4,5])))
