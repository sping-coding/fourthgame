import Cards from "./components/Cards";
import Test from "./TTTTest";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
