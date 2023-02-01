import './App.css';
import Header from './Layout/Header'
import Main from './component/main'
import Free from './component/free'
import SignIn from './component/signIn'
import SignUp from './component/signUp'

import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/자유게시판' element={<Free/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
