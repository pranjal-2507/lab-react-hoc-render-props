import { useState } from "react"
import React from 'react'

function RenderProps({children}) {

    const[count,setcount]=useState(0)
    function handleCount(){
        setcount(prev=>prev+1)
    }
  return children({count,handleCount})
}

export default RenderProps