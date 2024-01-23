import React, { useState } from 'react'

function CommonHOC(ChildComp) {
    let logic =()=>{
const[count,setCount] = useState(0)
function HandleIncrement(){
    setCount(count+1)
}

  return (
    <ChildComp ChildComp handleCount = {HandleIncrement} count = {count}/>
    
  )
}
return logic
}
export default CommonHOC