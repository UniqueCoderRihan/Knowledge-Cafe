
import { useState } from 'react';
import './App.css';
import Container from './Components/Containers/Container';
import Header from './Components/Header/Header';

function App(Readtime) {
  const [SpenTime,setTime] = useState("");
  const handleReadTime = (Readtime) =>{
    const previousTime = JSON.parse(localStorage.getItem("ReadTime",Readtime));
    if(previousTime){
      const ConvertedPreviousTime = parseInt(previousTime);
      const ConvertedReadTime = parseInt(Readtime);
      const totalTime = ConvertedPreviousTime+ConvertedReadTime;
      localStorage.setItem("ReadTime",totalTime);
      setTime(totalTime);
    }
    else{
      const ConvertedReadTime = parseInt(Readtime);
      localStorage.setItem("ReadTime",ConvertedReadTime);
      setTime(ConvertedReadTime);
    }
  }
  const addMark = (a)=>{
        console.log('log hocce');
  }
  return (
    <div className="App container">
      <Header></Header>
      <Container
      handleReadTime={handleReadTime}
      SpenTime = {SpenTime}
      addMark={addMark}
      ></Container>
    </div>
  );
}

export default App;
