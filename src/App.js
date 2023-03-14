
import './App.css';
import Header from './filelist/Header';
import Main from './filelist/Main';
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import Footer from './filelist/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header></Header>
          <div style={{position : 'fixed' }}>
            <Header></Header>
          </div>
        </div>
        <div>
          <Main></Main>
          <Main></Main>
          <Main></Main>
          <Main></Main>
      
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
