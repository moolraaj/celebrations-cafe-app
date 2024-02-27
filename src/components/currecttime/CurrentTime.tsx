import  { useState, useEffect } from 'react';

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
      const timerID = setInterval(() => tick(), 60000);
      return () => {
        clearInterval(timerID);
      };
    }, []);
  

    const tick=()=> {
      setCurrentTime(new Date());
    }


  return (
    <div className="current-time">
        <p className='show-time'>
      {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}
      </p>
   </div>
  );
}

export default CurrentTime;
