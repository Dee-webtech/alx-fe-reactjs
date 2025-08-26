import React from "react";
import Search from "./components/Search";   // import is added

function App() {
  return (
    <div>
      <h1>GitHub User Search App</h1>
      <Search />   {/* just to tell React what Search is */}
    </div>
  );
}

export default App;
