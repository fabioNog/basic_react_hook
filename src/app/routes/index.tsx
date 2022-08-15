import path from "path";
import ReactDOM from "react-dom/client";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate 
} from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login/Login";
import { Login2 } from "../pages/login/Login2";
import { Login3 } from "../pages/login/Login3";
import { Login4 } from "../pages/login/Login4";
import { Login5 } from "../pages/login/Login5";
// import your route components too

export const RoutesApp = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Dashboard/>}/>
            <Route path="/login"  element={<Login/>}/>
            <Route path="/login2"  element={<Login2/>}/>
            <Route path="/login3"  element={<Login3/>}/>
            <Route path="/login4"  element={<Login4/>}/>
            <Route path="/login5"  element={<Login5/>}/>
            <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        </Routes>
    </BrowserRouter>
    )

}



