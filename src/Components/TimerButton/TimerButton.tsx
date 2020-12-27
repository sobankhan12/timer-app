import React from 'react';
import {TimerButtonTypes} from "./TimerButtonTypes"

const TimerButton:React.FC<TimerButtonTypes> = ({
  start,reset,resume,stop,condition
}) => {
  return (
    <div>
      {condition===0? (
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>Start</button>
      ):("")}
            {condition===1? (
              <div>

             
        <button className="stopwatch-btn stopwatch-btn-red" onClick={stop}>Stop</button>
        <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>Reset</button>
        </div>
      ):("")}
                  {condition===2? (
              <div>

             
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={resume}>Resume</button>
        <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>Reset</button>
        </div>
      ):("")}
    </div>
  )
}

export default TimerButton
