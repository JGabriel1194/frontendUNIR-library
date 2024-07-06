import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../components/layout/Layout";
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";
import Books from "../pages/Books";
import BookDetail from "../pages/BookDetail";
import ReservedList from "../pages/ReservedList";
import ReserveDetail from "../pages/ReserveDetail";

function GlobalRouter(){
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout><Home></Home></Layout>} />
            <Route path="/libros" element={<Layout><Books/></Layout>}/>
            <Route path="/libros/:bookId" element={<Layout><BookDetail/></Layout>}/>
            <Route path="/prestamos" element={<Layout><ReservedList/></Layout>}/>
            <Route path="/prestamos/:reserveId" element={<Layout><ReserveDetail/></Layout>}/>
            <Route path="*" element={<Layout><NotFound></NotFound></Layout>} />
        </Routes>
    </BrowserRouter>
  );
}

export default GlobalRouter;
