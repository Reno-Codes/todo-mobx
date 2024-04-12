import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TodoDetails from "./pages/TodoDetails";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/:id" element={<TodoDetails></TodoDetails>}></Route>
        </Routes>
    );
}

export default App;
