import './App.css';
import Header from './Layout/Header'
import Main from './component/main'
import Free from './component/free'
import SignIn from './component/signIn'
import SignUp from './component/signUp'
import Detail from './component/detail'
import CreateFree from './component/createFree'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Main/>}/>

          <Route path='/general-forum' element={<Free/>}/>
          <Route path='/general-forum/:id' element={<Detail/>}/>

          <Route path='/create-post' element={<CreateFree/>}/>

          {/* <Route path='/general_forum' element={<Free/>}>
            <Route path=':id' element={<Detail/>}/>
          </Route> */}

          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
