import { memo } from 'react'
import './start.css'

const Start = memo(({ button }) => {
  return (
    <div className="start">
      <div className="start__button">{button}</div>
    </div>
  )
})

export default Start
