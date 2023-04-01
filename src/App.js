
import { useState } from 'react';
import './App.css';
import Container from './Components/Containers/Container';
import Header from './Components/Header/Header';
import Question from './Components/Questions/Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  const  [bookMarks, setbokmarks]=useState([])
  const notify = () => toast("Already Marked!");

  const addMark=(data)=> {
    const exist = bookMarks.find(b=>b.id === data.id)
    if(exist){
      notify()
      return
    }
    const newBookMark = [...bookMarks,data]
    setbokmarks(newBookMark);
      }

  return (
    <div className="App container">
      <Header></Header>
      <Container
      handleReadTime={handleReadTime}
      SpenTime = {SpenTime}
      addMark={addMark}
      bookMarks={bookMarks}

      ></Container>
      
      <ToastContainer/>
      <Question></Question>
      
    </div>
  );
  
  }
export default App;
