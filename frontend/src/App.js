import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correctly import Routes
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from "./components/Header";
import AddEdit from './pages/AddEdit';
import Home from './pages/Home'; 
import View from './pages/View'; 
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer />
        <Routes> {/* Use Routes instead of Switch */}
  <Route path="/" element={<Home />} />
  <Route path="/add" element={<AddEdit />} />
  <Route path="/update/:id" element={<AddEdit />} />
  <Route path="/view/:id" element={<View />} />
  <Route path="/about" element={<About />} />
</Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

