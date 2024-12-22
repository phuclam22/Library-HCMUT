import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import HomePage from "./components/HomePage"; 
import ManageDocs from "./components/ManageDocs";
import DocsDetail from "./components/DocsDetail";
import PersonalInfo from "./components/PersonalInfo";
import BorrowRegister from "./components/BorrowRegister";
import RequestExtension from "./components/RequestExtension"
import BookReturnConfirm from "./components/BookReturnConfirm";
import OverdueNotice from "./components/OverdueNotice";
import AddDocument from "./components/AddDocument";

const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manage-docs" element={<ManageDocs />} />
        <Route path="/docs-detail" element={<DocsDetail />} />
        <Route path="/add-document" element={<AddDocument />} />


        <Route path="/borrow-register" element={<BorrowRegister />} />
        <Route path="/request-extension" element={<RequestExtension />} />
        <Route path="/book-return" element={<BookReturnConfirm />} />
        <Route path="/overdue-notice" element={<OverdueNotice />} />

        <Route path="/personal-info" element={<PersonalInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
