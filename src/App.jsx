import './App.css'
import {Routes, Route} from "react-router-dom";

import CardPages from "./pages/CardPages/CardPages.jsx";
import CreatePages from "./pages/CreatePages/CreatePages.jsx";
import HomePages from "./pages/Home/HomePages.jsx";
import Layout from "./components/Layout.jsx";

function App() {

    return (
        <div className='wrapper'>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePages/>}/>
                    <Route path="cardBlock" element={<CardPages/>}/>
                    <Route path="createBlock" element={<CreatePages/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
