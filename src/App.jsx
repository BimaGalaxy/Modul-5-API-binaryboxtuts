import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProjectList from "./pages/ProjectList.jsx"
import ProjectCreate from "./pages/ProjectCreate.jsx"
import ProjectEdit from "./pages/ProjectEdit.jsx"
import ProjectShow from "./pages/ProjectShow.jsx"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProjectList />} />
          <Route path="/create" element={<ProjectCreate />} />
          <Route path="/edit/:id" element={<ProjectEdit />} />
          <Route path="/show/:id" element={<ProjectShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
