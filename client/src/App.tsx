import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
    return (
        <div className="bg-red-200">
            <h1 className="text-5xl ">Hello World!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </div>
    );
}

export default App;
