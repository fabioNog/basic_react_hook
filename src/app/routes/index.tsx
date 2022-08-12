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
// import your route components too

export const RoutesApp = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Dashboard/>}/>
            <Route path="/login"  element={<Login/>}/>
            <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        </Routes>
    </BrowserRouter>
    )

}



