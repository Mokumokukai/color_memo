import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopPage from './pages/TopPage';
import EditPage from './pages/EditPage';
import SignInPage from "./pages/SigninPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/signin" element={<SignInPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
