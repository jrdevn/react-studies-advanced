// spread operator
a1 = [1,2,3,4]
a2 =  [5,6,7,8]
a3 = [...a1, ...a2]
console.log(a3)

a4 = [0, ...a1, 5,6]
console.log(a4)

const carName = {name: 'Golf GTI'}
const carBrand = {brand: 'VW'}
const carSpecifics = {km: 10000, direction: 'automatic'}

automovel = {...carBrand, ...carName, ...carSpecifics}
console.log(automovel)
