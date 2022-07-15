import './App.css';
import Create from './component/create';
import Read from './component/read';
import Edit from './component/edit';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
        <Route  path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}
export default App;