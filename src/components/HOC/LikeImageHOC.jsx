import React from 'react'
import CommonHOC from './CommonHOC'

function LikeImageHOC({handleCount,count}) {

  return (
    <div>
        <button onClick={handleCount}>Like Image {count}</button>
    </div>
  )
}

export default CommonHOC(LikeImageHOC)