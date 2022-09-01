import './App.css';

import {useState, useEffect} from "react"

// custom hook
import {useFetch} from './hooks/useFetch';

const urlBase = "http://localhost:3000/products";


function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //custom 
  const {data: items} = useFetch(urlBase);


  // resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(urlBase)

  //     const data = await res.json()
  
  //     setProducts(data)
  
  //   }
  //   fetchData();
  // }, []);

  // enviando dados
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(urlBase,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });

    // carregamento dinâmico
    const addedProduct = await res.json();
    setProducts((previousProduct) => [...previousProduct, addedProduct ]); // pega lista antiga e adiciona prod
                                                                          // q veio da resposta da api

    // reseta form
    setName('');
    setPrice('');
  };




  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
