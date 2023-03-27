"use strict"
let workers_and_sallary = [
{w:5, s:10000},
{w:15, s:25000},
{w:40, s:50000},
{w:10, s:100000},
];
let taxes=0;
let quant=0;
for (let worker of workers_and_sallary){
  quant=quant+worker.w;
  taxes=taxes+(worker.w*worker.s*20/100);
}
console.log("Суммарные налоговые отчисления со всех зарплат"+": "+taxes+" рублей;");
console.log("Средние налоговые отчисления на человека в рублях"+ ": "+Math.floor(taxes/quant));