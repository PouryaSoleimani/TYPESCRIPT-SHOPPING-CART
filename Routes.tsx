import { createBrowserRouter, } from "react-router-dom";
import App from './src/App';
import Cart from "./src/Pages/Cart";
import Testing from "./src/Components/Testing";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/cart', element: <Cart /> },
    { path: '/test', element: <Testing /> },
])