import React from 'react'
import CommonHOC from './CommonHOC'

function LikePostHOC({handleCount,count}) {

  return (
    <div>
        <button onClick={handleCount}>Like Post {count}</button>
    </div>
  )
}

export default CommonHOC(LikePostHOC)