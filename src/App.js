import React from "react";
import MemoizedNavbar from "./components/navbar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <React.Fragment>
      <MemoizedNavbar />
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
