import React from 'react'
import "./home.css"
import SwipeableViews from 'react-swipeable-views';
const categoryList=[
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/18289de2eebb6654.png?q=100",
        category:"fashion"
    },
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/da4e107d50844c45.png?q=100",
        category:"electronics"
    },
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/962ede9fbddf94f4.png?q=100",
        category:"mobile"
    },
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/308474d15817c1b3.png?q=100",
        category:"Beauty"
    },
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a50deab37650e11b.png?q=100",
        category:"Home & Furniture"
    }
]
const Home = () => {
  return (
    <>
    <div className='home'>
    <div className='home-ctg'>
    <SwipeableViews style={{width:"100%"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        {categoryList.map((curr,index)=>{
        return(
            <div className='ctg' key={index}>
                <img src={curr.img} alt={curr.category} />
                <p>{curr.category}</p>
            </div>
        )
       })}
        </div>
    </SwipeableViews>
    </div>
    <div>
        corosol
    </div>
    </div>
    </>
  )
}

export default Home