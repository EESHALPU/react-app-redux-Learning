import React,{useState,useRef} from 'react'

export const Body = () => {
    const [count, setCount] = useState(0)
    let myCount = useRef(0)
    console.log("myCount===>",myCount)
  return (
    <div className='body'>
        <button className='btn' onClick={()=>{
            if(count){
                setCount(count-1)
                myCount.current=myCount.current-1
                console.log('mycount --',myCount)
            }
            console.log('count decrement',count)
        }}>-</button>
        <input type="text" value={count}/>
        <button className='btn' onClick={()=>{
            setCount(count+1)
            myCount.current=myCount.current+1
            console.log('mycount ++',myCount)
            
        }}>+</button><br/>
        <label> My-Count(useRef) : {myCount.current} </label> 
    </div>
  )
}
