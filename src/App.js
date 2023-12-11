import React from "react";
import Crud from "./Components/Crud.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewItem from "./Components/AddNewItem.js";
import Header from "./Components/Header.js";
import Update from "./Components/Update.js";
import Form from "./Components/Form.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/add-new-item" element={<AddNewItem />} />
        <Route path="/update-item/:itemId" element={<Update />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
