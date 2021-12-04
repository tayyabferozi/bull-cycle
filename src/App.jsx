import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./components/Landing";
import More from "./components/More";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/more" element={<More />} />
      </Routes>
    </Router>
  );
}

export default App;
