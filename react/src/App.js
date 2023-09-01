import {
  BrowserRouter, 
  Routes,
  Route,  
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import CreateStudent from "./pages/CreateStudent";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/create" element={<CreateStudent />} />
          <Route path="/students/:id/edit" element={ <EditStudent/> } />
       </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
