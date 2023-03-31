
import './App.css';
import Container from './Components/Containers/Container';
import Header from './Components/Header/Header';

function App(Readtime) {
  const handleReadTime = (Readtime) =>{
    const previousTime = JSON.parse(localStorage.getItem("ReadTime",Readtime));
    if(previousTime){
      const ConvertedPreviousTime = parseInt(previousTime);
      const ConvertedReadTime = parseInt(Readtime);
      const totalTime = ConvertedPreviousTime+ConvertedReadTime;
      localStorage.setItem("ReadTime",totalTime);
    }
    else{
      const ConvertedReadTime = parseInt(Readtime);
      localStorage.setItem("ReadTime",ConvertedReadTime);
    }
  }
  return (
    <div className="App container">
      <Header></Header>
      <Container
      handleReadTime={handleReadTime}
      ></Container>
    </div>
  );
}

export default App;
