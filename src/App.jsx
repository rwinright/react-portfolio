import { HashRouter, Route, Routes } from "react-router-dom";
import './App.scss'

import React from 'react'
import { Home } from "./pages/home/Home";


import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/about/About";
import { Work } from "./pages/work/Work";
import { Contact } from "./pages/contact/Contact";

export const App = () => {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}


export default App
