import React, { useState } from 'react'

const ProductBanner = ({props,sum,setSum,orderinfo,setOrderinfo}) => { 
    const prop = props.props;

    const [count,setCount] = useState(prop.itemcount);
    
    const [check,setCheck] = useState(false);
    
const handleOrder = (state) => {
    setCheck(!check);
  const currentOrder = { order:prop, count };
  console.log(state.target.checked)
  if (!state.target.checked) {
    const index = orderinfo.findIndex(order => order.order === prop); 
    const updatedOrder = [...orderinfo];
    updatedOrder.splice(index, 1); // Remove the item at the found index
    console.log("removed",updatedOrder)
    setOrderinfo(updatedOrder);
    setSum(Math.abs(sum - (count * prop.specs.price)) );
  } else {
    const updatedOrder = [...orderinfo, currentOrder];
    setOrderinfo(updatedOrder);
    setSum(sum + (currentOrder.count * prop.specs.price));
    console.log(updatedOrder);
  }

};


  return (
    <div className='lg:flex px-10 my-10 md:space-x-5'>
                  
                  <div className=''>
                    <img src={prop.color ? prop.color.imageuri : ''} className='w-full md:w-40 md:h-40 object-cover mb-10 md:mb-0'/>
                  </div>
                  <div>
                    <div className='text-2xl text-primary'>{prop.Product.name}</div>
                    <div className='md:flex lg:space-x-[200px] md:space-x-[70px]'>
                      <p className='w-[300px] text-slate-500'>{prop.Product.desc}</p>
                      <div className='text-md font-light  cursor-pointer space-x-3'>
                          <span onClick={()=> {if(count > 1&&!check){setCount(count-1)}}} >-</span>
                          <span>{count}</span>
                          <span onClick={()=> {if(count< prop.color.item_count &&!check){setCount(count+1)}}}>+</span>
                      </div>
                      <div className='flex space-x-3'>
                        <span className='pt-3'>Selected: </span>
                        <input type="checkbox"  onClick={(state)=>{handleOrder(state)}} ></input>
                      </div>  
                    </div>
            <button
                
                className='bg-primary mt-4 px-12 py-2  font-semibold rounded-sm text-white duration-200 hover:bg-inherit hover:text-primary'>
                Remove Item
            </button>
                  </div>
                </div>
  )
}

export default ProductBanner