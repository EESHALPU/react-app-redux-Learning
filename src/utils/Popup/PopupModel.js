import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../Sotre/cartSlice'
import store from '../Sotre/Store'
export const PopupModel = () => {
  const [showModel, setModel] = useState(false)
  const item_list = useSelector(store =>store.cart.items)
  const [amount, setAmount] = useState(0)
  let total = amount
  item_list.map((item=>{
    total = total+item.price
     console.log(total)
    
  }))
  console.log('item list from model',item_list)

  const MyModel = () =>{
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
      dispatch(clearCart())
    }
    return (
      <div className="popup-model">
        <h5>Your items</h5> <button className='btn bg-primary' onClick={()=>handleClearCart()}>Clear Cart</button>
        <table className="table">
          <thead>
            <tr>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            </tr>
            {item_list.map((item, key)=>{
                return(
                    <tr>
                    <th scope="col"><img src={item.img_url} style={{width:"50px", height:"40px"}}/> <span>{item.name}</span></th>
                    <th scope="col">1</th>
                    <th scope="col">{item.price}</th>
                  </tr>
                )
            })}
            <tr>
            <th scope="col"></th>
            <th scope="col"><h4>Total Amount : {total}</h4></th>
            <th scope="col"></th>
            </tr>
          </thead>
        </table>
        <p>
          click on proceed to buy to go to payment gateway
        </p>
        <button className="btn btn-secondary" onClick={() => setModel(false)}>
          Proceed to Buy
        </button>
      </div>
    );
  }
  return (
    <div>

        <button className='btn' style={{backgroundColor:"darkred"}} onClick={()=>{
            showModel?setModel(false):setModel(true)
        }}>Shopping Cart ({item_list.length})</button>
        {showModel && <MyModel/>}
    </div>
  )
}
