import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from 'organisms/Header';
import Footer from 'organisms/Footer';
import TopPage from './pages/TopPage';
import EditPage from './pages/EditPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
