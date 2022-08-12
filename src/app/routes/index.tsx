import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// import your route components too

export const RoutesApp = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1>Ola</h1>}>
            </Route>
        </Routes>
    </BrowserRouter>
    )

}

