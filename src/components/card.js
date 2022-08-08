import React from 'react'
import { useSelector } from 'react-redux'
const Card = () => {
    const products = useSelector((state)=>state.allproducts.products);
    const renderProductList = products.map((product)=>{
        const {id,title,image,price,category} = product;
        return(  
            // <div className='card col-12 my-4 col-sm-3 d-inline-block h-25'>
            //     <img height="400px" width="100%" src={image} alt={title}/>
            //     <p>{title}</p>

            // </div>
            <div className="card col-12 col-sm-2 my-4 mx-4 d-inline-block" key={id}>
                
           <img draggable="false" className="card-img-top my-4" src={image} alt=""  height="200px"width="200px"/>
           <div className="card-body">
           <h5 className="card-title">{title}</h5>
             <button  className='btn btn-primary container-fluid'>{`$ ${price}`}</button>
             <p>{category}</p>
  </div>
</div>
            )
    })
    console.log(renderProductList)
  return (
    <>
        {renderProductList}
    
    </>
  )
}

export default Card