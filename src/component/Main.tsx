import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/DiaryListPage";
import Add from "../pages/DiaryAddPage";
import Diary from "../pages/DiaryDetailPage"

const main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/diary-list" element={<List />}></Route>
            <Route path="/diary-detail/:id" element={<Diary />}></Route>
            <Route path="/diary-add" element={<Add />}></Route>
        </Routes>
    )
}

export default main