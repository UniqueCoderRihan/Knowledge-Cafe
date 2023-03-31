
import './App.css';
import Container from './Components/Containers/Container';
import Header from './Components/Header/Header';

function App(Readtime) {
  const handleReadTime = (Readtime) =>{
    console.log(Readtime);
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
