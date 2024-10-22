import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Add from "./Add";

const page = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/listing-page" element={<List />}></Route>
            <Route path="/add" element={<Add />}></Route>
        </Routes>
    )
}

export default page