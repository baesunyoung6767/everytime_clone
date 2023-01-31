import './App.css';
import Header from './Layout/Header'
import Main from './component/main'
import Free from './component/free'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/자유게시판' element={<Free/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
