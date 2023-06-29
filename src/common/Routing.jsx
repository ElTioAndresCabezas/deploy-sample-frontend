import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Books from '../books/Books';

function Routing() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App/>}/>
        <Route path={'/books'} element={<Books/>}/>
      </Routes>
    </BrowserRouter>
  ) 
}

export default Routing;