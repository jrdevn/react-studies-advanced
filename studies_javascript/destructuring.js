// destructuring

const fruits = ["Maça", "Laranja", "Mamão"]
const [f1, f2, f3] = fruits
console.log(f1)
console.log(f2)
console.log(f3)

const productDetails = {
    name: 'Camisa',
    price: 1200,
    category: 'Roupas',
    color: 'Cinza',
    attributes: [
        {
            size: 'M',
        },
        {
            weight: 30
        }
    ]
}

const 
    {name: productName, 
    price, 
    category, 
    color: colorProduct, 
    attributes: attributesProduct} = productDetails

console.log(`O nome do produto é ${productName}, com preço de: ${price}, categoria: ${category}, cor: ${colorProduct}`)
console.log(attributesProduct)
