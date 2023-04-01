
import { useState } from 'react';
import './App.css';
import Container from './Components/Containers/Container';
import Header from './Components/Header/Header';
import Question from './Components/Questions/Question';

function App(Readtime,id,title) {
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
  const  [bmarks, setbmarks]=useState([])

  const addMark=(id,title)=> {
        const isBookMared = bmarks.find((marked) => marked.id === id);
        // console.log(isBookMared);
        if(isBookMared){
          
          setbmarks([...bmarks, id,title])
        // toast("You Have Already Bookmarked This Blog");
        }
        else {

        setbmarks([...bmarks, id,title])
        
        }
        
      }

  return (
    <div className="App container">
      <Header></Header>
      <Container
      handleReadTime={handleReadTime}
      SpenTime = {SpenTime}
      addMark={addMark}
      bmarks={bmarks}
      ></Container>
      <Question></Question>
    </div>
  );
  
  }
export default App;
