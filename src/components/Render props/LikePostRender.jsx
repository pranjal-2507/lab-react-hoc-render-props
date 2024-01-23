import React from 'react'
import RenderProps from './RenderProps'

function LikePostRender() {

  return (
    <RenderProps>
    {
        ({count,handleCount})=>(
        <div>
        <button onClick={handleCount}>Like Post {count}</button>
        </div>
        )
}
    </RenderProps>
  )
}

export default LikePostRender