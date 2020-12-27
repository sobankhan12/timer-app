import React,{useState} from 'react'
import DisplayComponents from '../DisplayComponents/DisplayComponents'
import TimerButton from '../TimerButton/TimerButton';
type Time={
  ms:number,
  s:number,
  m:number,
  h:number
}
const Timer = () => {
  const[time,setTime]=useState<Time>({ms:0,s:0,m:0,h:0})
  // const[loop,setLoop]=useState<NodeJS.Timeout | any>();
  const [loop,setLoop] = useState<NodeJS.Timeout | any>();
  const[condition,setCondition]=useState<number>(0)
  const start=()=>{
    run();
      setCondition(1);
      setLoop(setInterval(run,10))
  }
  var changeMs=time.ms;
  var changeS=time.s;
  var changeM=time.m;
  var changeH=time.h;
  const reset:()=>void=()=>{
    clearInterval(loop)
        setCondition(0);
        setTime({ms:0,s:0,m:0,h:0})
  }
  const stop:()=>void=()=>{
    clearInterval(loop)
    setCondition(2)
    
  }
  const resume:()=>void=()=>{
       start();
  }
  const run:()=>void=()=>{
 
    if(changeMs===60){
      changeS++;
      changeMs=0;
    }
    if(changeS===60){
      changeM++;
      changeS=0;
    }
    if(changeM===60){
      changeH++;
      changeM=0;
    }
    changeMs++;

    
    
    setTime({ms:changeMs,s:changeS,m:changeM,h:changeH})
  }
  return (
    <div className="main-section">
      
      <div className="clock-holder">
        <div className="stopwatch">
        <DisplayComponents time={time}/>
      <TimerButton
      condition={condition}
      start={start}
      reset={reset}
      stop={stop}
      resume={resume}
      />
        </div>
      </div>

    </div>
  )
}

export default Timer
