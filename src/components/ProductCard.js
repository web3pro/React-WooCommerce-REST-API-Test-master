import React from 'react'

function ProductCard(props){
    return(
        <div>
            {props.product.name}
            {props.product.price}
        </div>
    )
}

export default ProductCard