import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from "./styles/GlobalStyle";

import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
