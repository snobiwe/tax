import { memo } from 'react'
import StartButton from '../../components/start_button/start_button'
import './start.css'

const Start = memo(() => {
  return (
    <div className="start">
      <div className="start__button">
        <StartButton path="/page" text={'Налоговый вычет'} />
      </div>
    </div>
  )
})

export default Start
