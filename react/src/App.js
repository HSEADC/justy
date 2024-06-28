import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Organisms/Navbar';
import Main from './components/SuperOrganisms/Main';
import Insp from './components/SuperOrganisms/insp';
import Des from './components/SuperOrganisms/des';
import Code from './components/SuperOrganisms/code';
import ArticlePage from './components/SuperOrganisms/Article';
import Footer from './components/Organisms/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
            <Route index path='/' element={<Main />} />
            <Route index path='/insp' element={<Insp />} />
            <Route index path='/des' element={<Des />} />
            <Route index path='/code' element={<Code />} />
            <Route index path='/:id' element={<ArticlePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};


export default App;
