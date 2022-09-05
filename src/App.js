import "./App.css";
import Router from "./routes/router";
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import Table from './components/table'

function App() {
  // return <Router />;

  const url=`http://localhost:9080/products/page/1`;
  const [products, setProducts] = useState({
    loading:false,
    data:null,
    error:false
  })

  useEffect(()=>{
    setProducts({
      loading:true,
      data:null,
      error:false
    })
    axios.get(url)
      .then(response =>{
        setProducts({
          loading:false,
          data:response.data,
          error:false
        })
      })
      .catch(()=>{
        setProducts({
          loading:false,
          data:null,
          error:true
        })
      })
  },[url])

  let content = null
  if(products.error){
    content = <p>There was an error</p>
  }

  if (products.loading){
    content = <p>Loading...</p>
  }

  if (products.data){
    content = products.data.map((product)=>
      <div>
          <div key={product.id}>
            <ProductCard
              product={product}
              />
          </div>
      </div>
    )
    
  }
  return(
    <div>
      <h1>
          This is a Product listing page.
      </h1>
      {content}
    </div>
  )

    
  }


export default App;
