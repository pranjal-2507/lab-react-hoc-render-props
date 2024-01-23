import React from 'react'
import RenderProps from './RenderProps'

function LikeImgRender() {

  return (
    <RenderProps>
        {
            ({count,handleCount})=>(
    <div>
        <button onClick={handleCount}>Like Image {count}</button>
    </div>
            )
}
    </RenderProps>
        
  )
}

export default LikeImgRender