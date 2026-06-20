import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Games from "../Games/Games";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={<Main searchText={searchText} setSearchText={setSearchText} />}
      />
      <Route
        path="/games"
        element={
          <Games searchText={searchText} setSearchText={setSearchText} />
        }
      />
    </Routes>
  );
}

export default App;
